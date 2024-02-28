<style>
.main_page_content{
    border-style: double;
    border-color: blue;
    border-width: 5px;
}
.gradient{
    position: absolute;
    left:0;
    right:0;
    height:24px;
    background-image: url('$lib/images/etroll.png');
    background-size: 96px 24px;
    background-repeat: repeat;
    animation: lolmao 15s linear infinite;
    opacity: 25%;
    z-index: 1;

}
@keyframes lolmao {
    0%{
        background-position: 0px;
    }
    50%{
        background-position: 500px;
    }
    100%{
        background-position: 0px;
    }
}
.header{
    position: relative;
    margin:0;
    padding:0;
    background: linear-gradient(90deg, rgba(0,27,255,1) 0%, rgba(0,144,255,1) 100%); 
    display: flex;
    flex-direction: row;
    border-bottom-style: solid;
    border-bottom-color: blue;
    border-bottom-width: 5px;
}
.header > p {
    z-index: 100;
    margin:0;
    margin-left:2%;
    font-weight: bold;
    color: white;
}
.content {
    margin:0;
    color: white;
}
</style>

<div class={`main_page_content`}>
    <div class="header">
        <div class="gradient">
        </div>
        <p>{sectionName}</p>
    </div>
    <div class="content">
        <slot/>
    </div>
</div>

<script>
export let sectionName = "";
</script>
