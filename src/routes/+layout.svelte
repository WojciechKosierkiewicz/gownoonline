<nav>
    <marquee>
    <a class="btn" href="/">Home</a>
    <a class="btn" href="/onas">onas</a>
    <a class="btn" href="/">Home</a>
    </marquee>
</nav>

<style>
    nav {
        background-color: #808080;
    }

    .btn {
        border: 6px ridge #c0c0c0;
        animation: blink 1s infinite;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
    }

    @keyframes
    blink {
        0% {
        background-color: #c0c0c0;
        }
        50% {
        background-color: #ffffffec;
        }
        100% {
        background-color: #c0c0c0;
        }
    }
</style>

<slot/>