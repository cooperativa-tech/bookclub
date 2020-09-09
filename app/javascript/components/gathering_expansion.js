// Add the expanding/collapsing behaviour when clicking on the gathering header to all gatherings
document.addEventListener("turbolinks:load", addExpansionAction);

function addExpansionAction() {
  const gatherings = document.querySelectorAll(".collapsible-gathering");
  gatherings.forEach((gatheringHead) => {
    gatheringHead.addEventListener("click", function expandGathering() {
      const content = gatheringHead.nextElementSibling;
      const arrowImage = gatheringHead.getElementsByTagName("img")[0];

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.paddingTop = "0";
        arrowImage.style.transform = "none";
      } else {
        content.style.paddingTop = "15px";
        content.style.maxHeight = `${content.scrollHeight}px`;
        arrowImage.style.transform = "rotate(180deg)";

        moveGatheringToTopOfWindow(gatheringHead);
      }
    });
  });

  const collapseUpButtons = document.querySelectorAll(".collapse-up");

  collapseUpButtons.forEach((collapseUpButton) => {
    collapseUpButton.addEventListener("click", function closeGathering() {
      const gatheringContent = collapseUpButton.parentElement;
      const gatheringHead = gatheringContent.parentElement;
      const arrowImage = gatheringHead.getElementsByTagName("img")[0];

      gatheringContent.style.maxHeight = null;
      gatheringContent.style.paddingTop = "0";
      arrowImage.style.transform = "none";
    });
  });
}

function moveGatheringToTopOfWindow(gathering) {
  const offset = 35;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = gathering.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}