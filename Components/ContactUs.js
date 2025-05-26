"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { PhoneInput } from "react-international-phone";
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string()
    .required("Mobile number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

// Extract UTM and tracking params from URL
const extractTrackingParams = () => {
  if (typeof window === "undefined") return {};
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get("utm_source") || "",
    utm_ad: urlParams.get("utm_ad") || "",
    utm_campaign: urlParams.get("utm_campaign") || "",
    utm_placement: urlParams.get("utm_placement") || "",
    utm_keyword: urlParams.get("utm_keyword") || "",
    gclid: urlParams.get("gclid") || "",
    fbclid: urlParams.get("fbclid") || "",
  };
};

export default function ContactForm() {
  const [trackingParams, setTrackingParams] = useState({});
  const router = useRouter();

  useEffect(() => {
    const params = extractTrackingParams();
    setTrackingParams(params);
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    const payload = { ...values, ...trackingParams };

    try {
      // Send to Google Apps Script
      await fetch(
        "https://script.google.com/macros/s/AKfycbzyV65VjevZ4lxvEFE_JmhT4PUMjVq79Te524VR4so_wxe49wiT7qec107J3AGcI_VL/exec",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      // Extract individual fields
      const {
        name,
        mobile,
        email,
        utm_source,
        utm_campaign,
        utm_ad,
        utm_placement,
        utm_keyword,
        gclid,
        fbclid,
      } = payload;

      // Send to CRM API with updated URL and structure
      const response = await fetch(
        "https://api.cparamount.com/leads/web-hook/campaigns?access_token=YUFZVDMSFFQKNDYWZKRLYBDIA",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            mobile,
            email,
            source: utm_source || "Google",
            campaign: utm_campaign || "",
            notes: `
UTM Source: ${utm_source || ""}
UTM Campaign: ${utm_campaign || ""}
UTM Ad: ${utm_ad || ""}
UTM Placement: ${utm_placement || ""}
GCLID: ${gclid || ""}
FBCLID: ${fbclid || ""}
UTM Keywords: ${utm_keyword || ""}`,
          }),
        }
      );

      const data = await response.json();
      console.log("CRM Response:", data);

      resetForm();
          router.push("/thankyou");
    } catch (err) {
      console.error("Form submission error:", err);
      alert("There was an error submitting the form.");
    }
  };
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/ContImage.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 py-12 md:py-16">
        <div className="text-center mb-8">
          <div className="w-28 mx-auto">
            <Image
              src="/assets/Banner_Logo.webp"
              width={112}
              height={112}
              alt="Slider Logo"
              className="opacity-70"
            />
          </div>
          <h2 className="text-3xl mb-2 font-extralight">CONTACT US</h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-4" />
          <p className="text-sm md:text-base font-extralight">
            Please Enter Your Details To Know More About Sobha Central
          </p>
        </div>

        <Formik
          initialValues={{
            name: "",
            mobile: "",
            email: "",
            utm_source: "",
            utm_ad: "",
            utm_campaign: "",
            utm_placement: "",
            utm_keyword: "",
            gclid: "",
            fbclid: "",
          }}
          validationSchema={ContactSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useEffect(() => {
              Object.entries(trackingParams).forEach(([key, value]) => {
                setFieldValue(key, value);
              });
            }, [setFieldValue]);

            return (
              <Form className="w-full max-w-4xl space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <FaUser className="absolute top-4 left-3 text-[#B18613]" />
                    <Field
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="pl-10 py-3 w-full rounded-md bg-white text-black outline-none"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <div className="relative flex-1">
                    <div className="flex items-center bg-white rounded-md border overflow-visible px-3 py-1">
                      <FaPhoneAlt className="text-[#D2A23A] mr-2" />
                      <Field name="mobile">
                        {({ field, form }) => (
                          <PhoneInput
                            defaultCountry="ae"
                            value={field.value}
                            onChange={(phone) =>
                              form.setFieldValue("mobile", phone)
                            }
                            onBlur={() => form.setFieldTouched("mobile", true)}
                            inputClassName="!w-full !text-base !rounded-md !px-2 !border-0 focus:outline-none"
                            className="!w-full !border-0 !text-gray-600"
                            buttonClass="!border-0 !bg-transparent"
                          />
                        )}
                      </Field>
                    </div>
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute top-4 left-3 text-[#B18613]" />
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="pl-10 py-3 w-full rounded-md bg-white text-black outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                {/* Hidden fields for tracking */}
                {Object.keys(trackingParams).map((key) => (
                  <Field key={key} type="hidden" name={key} />
                ))}

                <div className="flex flex-col items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#CAAD5E] cursor-pointer text-white font-medium px-6 py-2 rounded-md tracking-widest hover:bg-[#b8a675] transition"
                  >
                    {isSubmitting ? "Submitting..." : "SUBMIT"}
                  </button>
                  <p className="mt-4 text-xl font-bold">
                    Call: <span className="text-yellow-400">022-000000000</span>
                  </p>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
