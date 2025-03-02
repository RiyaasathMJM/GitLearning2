function changeBackgroundColor() {
    const colors = ['#ff6347', '#ffa07a', '#98fb98', '#8a2be2', '#f0e68c'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
