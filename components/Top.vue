<template>
  <div class="l-wrap">
    <h1 class="text-3xl !font-bold u-underline sp:u-text-green-500">
      Hello world!
    </h1>
    <img id="sakura" src="~/assets/img/sakura.jpg">
    <Button 
      theme="primary"
      label="Click here"
      hover
      hoverType="Re"
      extraClassName="u-mt-20 u-mb-20"
    />
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>