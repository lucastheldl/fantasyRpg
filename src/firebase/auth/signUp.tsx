import { doc, setDoc } from "firebase/firestore";
import { app, db } from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);
export async function signUp(
  email: string,
  password: string,
  username: string
) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", result.user.uid), {
      displayname: result.user.displayName,
      email: result.user.email,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
