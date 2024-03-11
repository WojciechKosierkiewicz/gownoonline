<script>
    import logo from '/smietnik/logo.gif'; 
    import hacker from '/smietnik/hacker3d.gif';
</script>

<style>
      .welcome-div > * {
        filter: hue-rotate(0deg);
        animation: rainboww 5s linear infinite;
    }
    .welcome-div {
        display: flex;
        justify-content: center;
        align-items: center;
        animation: dziekan 1.5s linear infinite;
        
    }

    @keyframes rainboww{
        0% {
            filter: hue-rotate(0deg);
        }
        100% {
            filter: hue-rotate(360deg);
        }
    }
    @keyframes dziekan{
        0% {
            transform: translateX(0%); 
        }
        25% {
            transform: translateX(-10%); 
        }
        50% { 
            transform: translateX(0%); 
        }
        75% {
            transform: translateX(10%); 
        }
        100% {
            transform: translateX(0%); 
        }
    }
    </style>
<div class="welcome-div rainbow">
    <img src={hacker} alt="asfdas"/> 
    <img src={logo} alt="asfdas"/>
    <img src={hacker} alt="asfdas"/>

</div>