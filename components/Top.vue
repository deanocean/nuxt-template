<template>
  <div class="l-wrap">
    <h1 class="u-text-6xl u-text-center !u-font-bold u-my-20 sp:u-text-green-500">
      Hello world!
    </h1>
    <img id="sakura" src="~/assets/img/sakura.jpg">
    <Button 
      theme="primary"
      label="Click here"
      hover
      hoverType="Re"
      extraClassName="u-mx-auto u-my-20 !u-flex"
    />
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>