(function() {
    const flipCardTemplate = document.createElement("template")
    flipCardTemplate.innerHTML = `
<style>
    /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
    .flip-card {
        background-color: transparent;
        width: 325px;
        height: 265px;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
    }

    /* This container is needed to position the front and back side */
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    /* Do an horizontal flip when you move the mouse over the flip box container */
    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        border-radius: 30px;
        box-shadow: 6px 6px 8px #00000033;
    }

    /* Style the front side (fallback if image is missing) */
    .flip-card-front {
        color: black;
    }

    /* Style the back side */
    .flip-card-back {
        transform: rotateY(180deg);
    }
</style>
<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <slot name="front"></slot>
        </div>
        <div class="flip-card-back">
            <slot name="back"></slot>
        </div>
    </div>
</div>`
    class FlipCard extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: "open"})
            this.shadowRoot.appendChild(flipCardTemplate.content.cloneNode(true))
        }
    }
    customElements.define("threelrv-flip-card", FlipCard)

    const teamCardTemplate = document.createElement("template")
    teamCardTemplate.innerHTML = `
<style>
    *, *:before, *:after {
        box-sizing: inherit;
    }
    h1, h2 {
        margin: 0;
        padding: 0;
        font-family: 'Work Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: normal;
        letter-spacing: 0rem;
    }
    article {
        background-color: transparent;
    }
    header {
        display: flex;
        flex-direction: column;
    }
        header h1 {
            color: #131E29;
            font: 600 1.5rem/1.625rem 'Source Sans Pro';
        }
        header h2 {
            color: #003595;
            font: 700 1.125rem/1.625rem 'Source Sans Pro';
            height: 52px;
            text-transform: uppercase;
        }
</style>
<article>
    <header>
        <h1><slot name="name"></slot></h1>
        <h2><slot name="role"></slot></h2>
    </header>
    <slot></slot>
</article>`
    class TeamCard extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: "open"})
            this.shadowRoot.appendChild(teamCardTemplate.content.cloneNode(true))
        }
    }
    customElements.define("threelrv-team-card", TeamCard)
})()