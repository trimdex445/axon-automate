// lib/submitQuote.ts
import { db, collection, doc, setDoc } from "@/lib/firebase";

export const submitQuote = async (data: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) => {
  const { name, company } = data;

  // Build document ID prefix (cleaned and lowercased)
  const prefix = (company || name || "anon").replace(/\s+/g, "-").toLowerCase();
  const uniqueId = `${prefix}-${Date.now()}`;

  try {
    await setDoc(doc(collection(db, "leads"), uniqueId), {
      ...data,
      timestamp: new Date().toISOString(),
    });
    return { success: true };
  } catch (error) {
    console.error("❌ Firestore submission failed:", error);
    return { success: false, error };
  }
};
