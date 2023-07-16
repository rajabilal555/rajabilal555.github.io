const scrolltoHash = function (
  element_id: string,
  position: ScrollLogicalPosition
) {
  const element = document.getElementById(element_id);
  element?.scrollIntoView({
    behavior: "smooth",
    block: position,
  });
};

export { scrolltoHash };
