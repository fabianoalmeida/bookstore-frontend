<template>
  <div>
    <div class="page-header">
      <div class="float-right">
        <input type="text" name="search" v-model="search" placeholder="Search..." class="form-control"></input>
      </div>
      <h1>All authors</h1>
    </div>
    <div class="row">
      <Box v-for="author in authors" :key="author._id" :author="author" v-show="searchMatch(author.firstName)"></Box>
    </div>
  </div>
</template>

<script>
import Box from './Box'

export default {
  name: 'List',
  data () {
    return {
      search: '',
      authors: []
    }
  },
  created () {
    this.$http.get('/users', {headers: {'x-access-token': `${localStorage.token}`}})
        .then(response => this.buildAuthorList(response.data))
        .catch(() => { alert('Something went wrong!') })
  },
  methods: {
    buildAuthorList (data) {
      this.authors = data
    },
    searchMatch (firstName) {
      return firstName.toLowerCase().match(this.searchRegExp)
    }
  },
  computed: {
    searchRegExp () {
      return new RegExp(`(.*)${this.search}(.*)`)
    }
  },
  components: {
    Box
  }
}
</script>