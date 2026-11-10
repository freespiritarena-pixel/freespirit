/** Shared trial-lesson inquiry validation, used by the form and the API route. */

export type Inquiry = {
  name: string;
  email: string;
  phone: string;
  riderAge: string;
  experience: string;
  program: string;
  message: string;
};

export type InquiryErrors = Partial<Record<keyof Inquiry, string>>;

export const emptyInquiry: Inquiry = {
  name: "",
  email: "",
  phone: "",
  riderAge: "",
  experience: "",
  program: "",
  message: "",
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateInquiry(v: Inquiry): InquiryErrors {
  const e: InquiryErrors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!EMAIL.test(v.email.trim())) e.email = "Enter an email address like name@example.ca.";
  const digits = v.phone.replace(/\D/g, "");
  if (v.phone.trim() && (digits.length < 10 || digits.length > 11))
    e.phone = "Enter a 10-digit phone number, or leave this blank.";
  const age = Number(v.riderAge);
  if (!v.riderAge.trim()) e.riderAge = "Enter the rider's age.";
  else if (!Number.isInteger(age) || age < 5 || age > 99)
    e.riderAge = "Riders start from age 5. Enter an age between 5 and 99.";
  if (!v.experience) e.experience = "Choose the option closest to the rider's experience.";
  if (v.message.length > 1500) e.message = "Please keep your message under 1,500 characters.";
  return e;
}
