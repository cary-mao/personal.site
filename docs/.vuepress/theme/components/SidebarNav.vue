<template>
  <nav>
    <div class="nav">
      <SidebarNavList :headers="headers" />
    </div>
  </nav>
</template>

<script>
import SidebarNavList from "./SidebarNavList.vue";

export default {
  name: "SidebarNav",
  components: {
    SidebarNavList,
  },
  computed: {
    /**
     * 生成树形结构headers
     */
    headers() {
      const headers = this.$page.headers;
      if (headers) {
        const stack = [];
        const result = [];
        let top = -1;
        let prev; // previous header
        stack.push(result);
        headers.forEach((header) => {
          if (!prev) {
            top = 0;
            stack[top].push(header);
          } else if (prev.level < header.level) {
            const children = [header];
            stack.push(children);
            top++;
            prev.children = children;
          } else if (prev.level > header.level) {
            let arr;
            do {
              arr = stack.pop();
              top--;
            } while (arr[0].level !== header.level);
            arr.push(header);
          } else {
            stack[top].push(header);
          }
          prev = header;
        });

        return result;
      }
      return [];
    },
  },
};
</script>
