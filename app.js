// DIPAK KUMAL

const startRecording = async () => {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: {
      mediaSource: "screen",
    },
  });
  const data = [];

  const mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.start();
  mediaRecorder.ondataavailable = (e) => {
    data.push(e.data);
  };

  mediaRecorder.onstop = (e) =>{
    document.querySelector("video").src = URL.createObjectURL(
        new Blob(data, {
          type: data[0].type,
        })
      );
  }
};
startRecording();
