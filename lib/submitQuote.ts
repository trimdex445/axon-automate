// lib/submitQuote.ts
import { db } from "@/lib/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

export const submitQuote = async (data: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) => {
  const { name, company } = data;

  const prefix = (company || name || "anon").replace(/\s+/g, "-").toLowerCase();
  const uniqueId = `${prefix}-${Date.now()}`;

  try {
    await setDoc(doc(collection(db, "quoteRequests"), uniqueId), {
      ...data,
      timestamp: new Date().toISOString(),
    });
    return { success: true };
  } catch (error) {
    console.error("❌ Firestore submission failed:", error);
    return { success: false, error };
  }
};
