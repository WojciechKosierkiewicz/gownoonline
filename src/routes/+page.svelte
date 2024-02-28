<script>
    import MainSection from '$lib/components/MainSection.svelte';
    import piwoooooo from '$lib/images/rogacz-piwo.gif';
    import GownoHeader from '$lib/components/GownoHeader.svelte';
    import W from '$lib/images/w.gif';
</script>
<GownoHeader/>


<div class="shit_page_content">
    <div class="main_page_div">
        <div class="about_us">
            <MainSection sectionName="O nas">
                <h1 class="intro_text">studenten debilen stronen internetowen</h1>
            </MainSection>
        </div>
        <div class="w">
            <MainSection sectionName=":DDDDDDD">
                <img src={W} width="100%" height="100%" alt="wddddddddddddddd"/>
            </MainSection>
        </div>
        <div class="piwo">
            <MainSection sectionName="Nasi sponsorzy">
                <p>powered by piwo</p>
                <img src={piwoooooo} width="50px" height="50px" alt="piwoooooooooooooooooooooooooooooooooooooooooooooo"/>
            </MainSection>
        </div>
    
    </div>    
</div>


<style>
    .main_page_div{
        width:80vw;
        height:75vh;
        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: repeat(4, 25%);
    }
    .intro_text{
        text-align: center;
    }
    .about_us {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 1;
    }
    .piwo {
        grid-column: 4;
        grid-row:4;
    }
</style>