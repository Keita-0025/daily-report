import getQueryParam from "./URLSearchParam";

const initForm = () => {
    document.addEventListener("DOMContentLoaded", () => {
      const isEditMode = getQueryParam("edit") === "true";

      if (isEditMode) {
        // URLからデータを取得
        const name = getQueryParam("name");
        const work = getQueryParam("work");
        const comment = getQueryParam("comment");

        document.getElementById("name").value = name || "";
        document.getElementById("work").value = work || "";
        document.getElementById("comment").value = comment || "";

        const submitButton = document.querySelector(".btn");
        submitButton.textContent = "Update";
      }
    });
  }


export default initForm;