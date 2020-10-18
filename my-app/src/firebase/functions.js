import firebase from "../firebase.js";

const writeData = () => {
  const dbRef = firebase.firestore().collection("data").doc("test");
  const item = {
    emissions: "20kg",
    mileage: "100mi",
    offset: 50,
    purchases: 6,
  };
  dbRef.set({ item });
};

const readData = async () => {
  const snapshot = await firebase.firestore().collection("data").get();
  console.log(snapshot.docs.map((doc) => doc.data()));
};

export { writeData, readData };
