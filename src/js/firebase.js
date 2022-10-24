// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { gsap } from "gsap";

const like = document.querySelector(".like");
const likeTitle = document.querySelector(".like-title");
const likeCounter = document.querySelector(".like-counter");
let likeNumber = 0;

// Like event Handler
function addLike() {
  likeNumber++;
  likeCounter.innerHTML = likeNumber;
  updateCounter();
  readCounter();

  const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } });

  tl.to([likeTitle, likeCounter], { yPercent: -100 });
  tl.to(likeTitle, { autoAlpha: 0, duration: 0.75 }, "<");
  tl.fromTo(likeCounter, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.75 }, "<");
}

like.addEventListener("click", addLike);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZX2Evg6U2-egRWORgZ67j-31V2aUk2f8",
  authDomain: "react-9df62.firebaseapp.com",
  projectId: "react-9df62",
  storageBucket: "react-9df62.appspot.com",
  messagingSenderId: "536745483285",
  appId: "1:536745483285:web:cd7a89e38f6cb0c326021c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const counterDoc = doc(db, "react/sprint-3");

// Read Counter
export async function readCounter() {
  const snapshot = await getDoc(counterDoc);

  if (snapshot.exists()) {
    likeNumber = snapshot.data().counter;
  }
}

// Update Counter

function updateCounter() {
  const docData = {
    counter: likeNumber,
  };

  setDoc(counterDoc, docData, { merge: true });
}
