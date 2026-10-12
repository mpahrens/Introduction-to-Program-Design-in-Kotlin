document.addEventListener("DOMContentLoaded", () => {
  for (const set of window.CS1101_READING_SETS || []) {
    const link = document.querySelector(`.lesson-card a[href="${set.hub}"]`);
    const card = link?.closest(".lesson-card");
    if (!card) continue;

    const necessary = set.readings.filter((reading) => reading.status === "necessary").length;
    const optional = set.readings.filter((reading) => reading.status === "optional").length;
    const description = card.querySelector("div > p");
    const tagline = card.querySelector(".tagline");

    if (description) description.textContent = set.cardSummary;
    if (tagline) tagline.textContent = `${necessary} pre-lecture readings + ${optional} follow-up reading${optional === 1 ? "" : "s"}`;
  }
});
