<template>
  <div id="collections">
    <h1>Collections</h1>
    <div class="toolbar">
      <div>
        <input
          class="input"
          type="text"
          placeholder="searching by title"
          v-model="searchValue"
        />
      </div>
      <div class="filter-box">
        <button class="button" @click.stop="onSelectToggle">
          tag filter <i class="triangle"></i>
        </button>
        <div class="tags-selector" ref="tagsSelector" v-show="isTagOptionsShow">
          <label
            v-for="tagOption in tagOptions"
            :key="tagOption.value"
            :for="tagOption.value"
          >
            <input
              type="checkbox"
              :id="tagOption.value"
              :value="tagOption.value"
              :checked="tagOption.checked"
              @change="onCheckboxChange"
            />
            {{ tagOption.text }}
          </label>
        </div>
      </div>
    </div>
    <div class="posts">
      <ul class="post-list">
        <li v-for="collection in collections" :key="collection.link">
          <a
            class="post-link"
            :href="collection.link"
            target="_blank"
            rel="noopener noreferer"
          >
            <h3>
              {{ collection.title }}
              <span class="c-tag">{{ collection.type }}</span>
            </h3>
            <div>
              <span
                class="c-tag"
                v-for="tag in collection.tags.slice(0, 5)"
                :key="tag"
              >
                {{ tag }}
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Permalink from "@theme/components/Permalink.vue";

export default {
  name: "Collections",
  components: {
    Permalink,
  },
  data() {
    return {
      searchValue: "",
      tagOptions: [],
      isTagOptionsShow: false,
    };
  },
  computed: {
    collections() {
      let collections = this.$themeConfig.collections;

      if (this.filteredTags.length) {
        collections = collections.filter((collection) => {
          return collection.tags.some((tag) => this.filteredTags.includes(tag));
        });
      }

      if (this.searchValue) {
        collections = collections.filter((collection) => {
          return collection.title.indexOf(this.searchValue) >= 0;
        });
      }

      return collections;
    },
    filteredTags() {
      return this.tagOptions
        .filter((tagOption) => tagOption.checked)
        .map((tagOption) => tagOption.text);
    },
  },
  methods: {
    onCheckboxChange(e) {
      this.tagOptions.forEach((tagOption) => {
        if (tagOption.value === e.target.value) {
          tagOption.checked = e.target.checked;
        }
      });
    },
    onSelectToggle(e) {
      this.isTagOptionsShow = !this.isTagOptionsShow;
    },
    selectorClickOutside(e) {
      if (
        this.isTagOptionsShow &&
        !this.$refs.tagsSelector.contains(e.target)
      ) {
        this.isTagOptionsShow = false;
      }
    },
  },
  created() {
    let tagOptions = [];
    this.$themeConfig.collections.forEach((collection) => {
      tagOptions = tagOptions.concat(collection.tags);
    });
    tagOptions = Array.from(new Set(tagOptions));
    this.tagOptions = tagOptions.map((tagOption) => {
      return {
        value: tagOption,
        text: tagOption,
        checked: false,
      };
    });
  },
  mounted() {
    this.clickOutSideListener = this.selectorClickOutside.bind(this);
    document.addEventListener("click", this.clickOutSideListener);
  },
  unmounted() {
    document.removeEventListener("click", this.clickOutSideListener);
  },
};
</script>

<style lang="stylus">
#collections
    .toolbar
        display flex
        align-items center
        .input
            margin-right 1.25rem
            padding .5rem
            outline none
            border var(--gray-4)
        .button
            color #fff
            background-color var(--green)
            border-radius 8px
            i
                margin-top calc(0.12rem + 1px)
                margin-left .5rem
                border-top-color #fff
    .filter-box
        position relative
        .tags-selector
            overflow auto
            position absolute
            min-width 250px
            max-height 300px
            padding 1rem
            background-color #fff
            // border: 1px solid var(--gray-6)
            box-shadow 0 0 2px var(--gray-6)
            label
                display flex
                align-items center
                margin-bottom .5rem
                input[type=checkbox]
                    margin-right .25rem
    .post-link
        h2
            display flex
            align-items center
</style>
