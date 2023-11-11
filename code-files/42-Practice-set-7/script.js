// Q1
let fxn = () => {
  document.addEventListener("DOMContentLoaded", async () => {
    let imageContainer = document.getElementsByClassName("image")[0];
    let fileSizeContainer = document.getElementsByClassName("fileSize")[0];

    let getResponse = async (url) => {
      let response = await fetch(url);
      if (!response.ok) {
        console.error(`lol ${response.status} : ${response.statusText}`);
        return;
      }
      return response.json();
    };

    let mapAttributesToDivContainers = (
      imageDiv,
      imageSource,
      fileSizeDiv,
      fileSize
    ) => {
      imageDiv.innerHTML = `<img src='${imageSource}'>`;
      fileSizeDiv.innerHTML = `The size of this image is : ${Math.floor(
        fileSize / 1024
      )}kb`;
    };

    let requiredAttributes = await getResponse("https://random.dog/woof.json");

    mapAttributesToDivContainers(
      imageContainer,
      requiredAttributes.url,
      fileSizeContainer,
      requiredAttributes.fileSizeBytes
    );
  });
};

// fxn();

// Q2 -> Note Saving APP

const notesApp = () => {
  document.addEventListener("DOMContentLoaded", async () => {
    let localNoteSaver = (note) => {
      localStorage.setItem(`note`, note);
      alert("Note Saved Successfully!");
    };

    // Q3 ->
    let noteFetcher = () => {
      let note = localStorage.getItem(`note`);
      console.log(localStorage.getItem(`note`));
      document.getElementsByClassName(
        `notes`
      )[0].innerHTML = `Your Saved Note is :<br>${note}`;
    };

    // Q4 ->
    let noteEraser = () => {
      localStorage.removeItem(`note`);
      document.getElementsByClassName(`notes`)[0].innerHTML =
        "The notes are empty";
    };

    let option = parseInt(
      prompt(`
        Welcome to Browser Notes, Enter a number to Proceed:
        1. Add/Update your note
        2. Show your Saved Note
        3. Delete your Note
      `)
    );

    switch (option) {
      case 1:
        localNoteSaver(prompt("Please enter your note :"));
        break;

      case 2:
        noteFetcher();
        break;

      case 3:
        noteEraser();
        break;

      default:
        document.getElementsByClassName(
          `notes`
        )[0].innerHTML = `Invalid Option`;
        break;
    }

    let exitFlag = confirm("Do you want to exit ?");

    if (!exitFlag) {
      notesApp();
    }
  });
};

// notesApp();
