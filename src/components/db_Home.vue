<template>
  <div class="container">
    <h1 class="title">豆瓣电影</h1>
    <el-row class="search-row">
      <el-col :span="12" :offset="6">
        <el-input v-model="searchText" placeholder="请输入搜索关键词" clearable @clear="handleClear" @keyup.enter="handleSearch">
          <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="main-row">
      <el-col :span="16" :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
        <div class="content left-content">
          <el-row :gutter="20" class="movies-row">
            <el-col :span="4" v-for="movie in movies" :key="movie.id">
              <el-card class="movie-card" shadow="hover">
                <div class="movie-image">
                  <img :src="movie.imageUrl" alt="电影海报" />
                </div>
                <div class="movie-details">
                  <h3 class="movie-title">{{ movie.title }}</h3>
                  <div class="movie-rating">
                    <el-rate :value="(movie.rating)/2" :max="5" :allow-half="true" disabled></el-rate>
                    <span class="rating-score">{{ movie.rating }}</span>
                  </div>
                  <el-button class="movie-button" type="primary" size="small">选座购票</el-button>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8" :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <div class="content right-content">
          <h2 class="right-title">右侧内容</h2>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'db_Home',
  data() {
    return {
      searchText: '',
      movies: [
        {
          id: 1,
          title: '电影标题1',
          imageUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2892365111.webp',
          rating: 8.5
        },
        {
          id: 1,
          title: '电影标题1',
          imageUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2892365111.webp',
          rating: 8.5
        },{
          id: 1,
          title: '电影标题1',
          imageUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2892365111.webp',
          rating: 8.5
        },{
          id: 1,
          title: '电影标题1',
          imageUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2892365111.webp',
          rating: 8.5
        },{
          id: 1,
          title: '电影标题1',
          imageUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2892365111.webp',
          rating: 8.5
        },{
          id: 1,
          title: '电影标题1',
          imageUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2892365111.webp',
          rating: 8.5
        },{
          id: 1,
          title: '电影标题1',
          imageUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2892365111.webp',
          rating: 8.5
        },
      ]
    };
  },
  methods: {
    handleSearch() {
      // 处理搜索逻辑
      console.log('搜索关键词：', this.searchText);
    },
    handleClear() {
      // 处理清除搜索框逻辑
      console.log('清除搜索框');
      this.searchText = '';
    }
  }
};
</script>
<style scoped>
.container {
  margin: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.search-row {
  margin-bottom: 20px;
}

.main-row {
  display: flex;
}

.left-content {
  background-color: #f5f7fa;
  padding: 20px;
}

.right-content {
  background-color: red;
  padding: 20px;
}

.movies-row {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.movie-card {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.movie-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.movie-details {
  margin-top: 10px;
}

.movie-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.movie-rating {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.rating-score {
  margin-left: 5px;
  font-size: 14px;
}

.movie-button {
  margin-top: 10px;
}

.right-title {
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
</style>