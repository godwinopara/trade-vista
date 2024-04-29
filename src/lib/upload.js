import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

const upload = async (file) => {
	const storage = getStorage();
	const storageRef = ref(storage, file.name);
	const date = new Date();
	const uploadTask = uploadBytesResumable(storageRef, `image/${date + file.name}`);

	return new Promise((resolve, reject) => {
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log("Upload is " + progress + "% done");
				switch (snapshot.state) {
					case "paused":
						console.log("Upload is paused");
						break;
					case "running":
						console.log("Upload is running");
						break;
				}
			},
			(error) => {
				// Handle unsuccessful uploads
				reject("Something went wrong!" + error.code);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					resolve(downloadURL);
				});
			}
		);
	});
};

export default upload;
