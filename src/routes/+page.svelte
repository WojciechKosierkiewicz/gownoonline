<script>
    import logo from '$lib/images/logo.gif'; 
    import hacker from '$lib/images/hacker3d.gif';
    import earth from '$lib/images/earth.gif';
</script>


<div class="welcome-div">
    <img src={earth} alt="asfdas"/>
<img src={hacker} alt="asfdas"/> <img src={logo} alt="asfdas"/>
<img src={hacker} alt="asfdas"/>
</div>

<div class="main content box">

</div>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
    .welcome-div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1 {
        text-align: center;
    }
    p {
        text-align: center;
    }
</style>