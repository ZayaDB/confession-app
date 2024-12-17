export function createSnowflakes() {
  const container = document.getElementById("snowfall");
  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${3 + Math.random() * 5}s`;
    snowflake.style.width = `${Math.random() * 10}px`;
    snowflake.style.height = snowflake.style.width;
    container.appendChild(snowflake);
  }
}

export function createStars() {
  const container = document.getElementById("stars");
  for (let i = 0; i < 30; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    container.appendChild(star);
  }
}
