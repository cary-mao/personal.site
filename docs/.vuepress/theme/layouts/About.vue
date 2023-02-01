<template>
  <div id="about" class="column-2">
    <Content class="post column-2-stretch" />
    <div class="sidebar column-2-fixed">
      <div class="card-dl">
        <div class="card-dt">
          <h2>POSTER</h2>
        </div>
        <div class="card-dd">
          <img :src="$withBase('/poster.png')" alt="poster" />
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="stylus">
#about
  p
    -webkit-font-smoothing: auto;
    font-size: 1.05rem;
    line-height: 1.625;
    font-weight: 500;
    margin-bottom: 1.5rem;
</style>
