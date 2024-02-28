<script>
	import Gifbutton from '../lib/components/gifbutton.svelte';
    import eart from '$lib/images/earth.gif';
    import spinmak from '$lib/images/spinmask.gif';
    import phot from '$lib/images/photo.gif'
</script>

		<nav>
			<Gifbutton imageUrl={eart} text="Home" href="/" />
			<Gifbutton imageUrl={spinmak} text="Onas" href="/onas" />
			<Gifbutton imageUrl={phot} text="Galeria" href="/galeria" />
		</nav>

<div class="tlo">
	<div class="rotor">
		<slot />
	</div>
</div>

<style>
	nav {
		background-color: #808080;
		display: inline-flex;
		width: 100%;
        height: 50px;
	}
	.rotor {
		animation: rotate 10s linear infinite;
	}
    .tlo    {
        /* position: fixed; */
        overflow: auto;
        background-image: url('$lib/images/background.gif');
        background-size: 100%;
        background-repeat: repeat;
        width: 100%;
        height: 100vh;
        animation: tloanim 10s linear infinite;
    }

    @keyframes tloanim {
        0% {
            background-position: 0px;
        }
        100% {
            background-position: 1000px;
        }

    }
	@keyframes rotate {
		25% {
			transform: rotate(1deg);
		}
		50% {
			transform: rotate(0deg);
		}
		75% {
			transform: rotate(-1deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
