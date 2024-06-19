import { atom } from "recoil";

const authScreenAtom = atom({
	key: "authScreenAtom",
	default: "login",
});

export default authScreenAtom;

// to use recoil we need to use atom
// atom is basically a state
