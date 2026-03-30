# 🎬 Movie App – Trải nghiệm điện ảnh trực tuyến

<p align="center">
  <img src="https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS_3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/React_Router_7-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/TMDb_API-01D277?style=for-the-badge&logo=themoviedatabase&logoColor=white" alt="TMDb" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p align="center">
  <b>Ứng dụng khám phá phim & TV Show với giao diện phong cách Netflix, được xây dựng bằng React + Vite.</b>
</p>

---

## 🚀 Demo

👉 **[Trải nghiệm ngay tại đây](https://movie-app-offical.vercel.app/)**

---

## 📖 Giới thiệu

**Movie App** là một ứng dụng web Single Page Application (SPA) cho phép người dùng khám phá, tìm kiếm và xem thông tin chi tiết về phim (Movie) và chương trình truyền hình (TV Show). Dữ liệu được tích hợp từ **The Movie Database API (TMDb)** — cơ sở dữ liệu phim lớn nhất thế giới.

Ứng dụng được thiết kế với giao diện phong cách **Netflix**, tập trung vào **tốc độ tải trang**, **trải nghiệm người dùng mượt mà** và **giao diện responsive** trên mọi thiết bị.

---

## 🛠️ Công nghệ sử dụng

| Công nghệ | Mô tả |
|---|---|
| ⚛️ **React 18** | Xây dựng UI với component-based architecture |
| ⚡ **Vite 5** | Build tool siêu nhanh, hỗ trợ HMR tức thời |
| 🎨 **TailwindCSS 3** | Utility-first CSS framework, responsive hoàn hảo |
| 🧭 **React Router 7** | Client-side routing với lazy loading |
| 🎬 **TMDb API** | REST API cung cấp dữ liệu phim & TV Show |
| 📝 **React Hook Form** | Quản lý form hiệu quả với validation |
| 🔤 **Font Awesome** | Hệ thống icon phong phú |
| 📦 **Lodash** | Utility functions (debounce, throttle, ...) |
| 🎯 **ESLint + Prettier** | Linting & formatting code tự động |
| ▲ **Vercel** | Platform deploy & hosting |

---

## ✨ Tính năng nổi bật

### 🏠 Trang chủ (Home)
- **Feature Movies Banner** — Carousel hiển thị phim nổi bật với poster lớn & hiệu ứng chuyển cảnh.
- **Trending** — Danh sách phim/TV Show đang thịnh hành (All / Movie / TV Show) cập nhật theo ngày.
- **Top Rated** — Phim & TV Show được đánh giá cao nhất (Movie / TV Show).
- Chuyển đổi danh mục bằng hệ thống **tab linh hoạt**.

### 🔍 Tìm kiếm & Khám phá (Search & Discover)
- Tìm kiếm nâng cao kết hợp nhiều tiêu chí:
  - Lọc theo **loại media**: Movie hoặc TV Show.
  - Lọc theo **thể loại** (genre): hành động, kinh dị, tình cảm, ...
  - Lọc theo **khoảng điểm đánh giá** (rating).
- Kết quả hiển thị dạng lưới (grid) trực quan.

### 🎥 Chi tiết phim (Movie Detail)
- **Banner backdrop** toàn màn hình với gradient overlay.
- Thông tin đầy đủ: tiêu đề, mô tả, thể loại, ngày phát hành, điểm đánh giá.
- **Certification** (phân loại độ tuổi) từ MPAA.
- **Trailer video** — Xem trailer YouTube trực tiếp qua popup modal.
- **Circular Progress Bar** — Hiển thị điểm đánh giá dạng vòng tròn.
- Danh sách **đạo diễn, biên kịch** (Director, Screenplay, Writer).
- **Thông tin sản xuất**: quốc gia, ngân sách, doanh thu, thời lượng.
- **Danh sách diễn viên** với ảnh & tên vai diễn.
- **Phim liên quan** (Recommendations) — Đề xuất phim tương tự.

### 📺 Chi tiết TV Show (TV Show Detail)
- Tương tự Movie Detail, bổ sung thêm:
  - **Danh sách mùa phim** (Seasons) với poster & tổng số tập.
  - **Số tập mỗi diễn viên** đã tham gia.
  - Thông tin TV Show riêng: trạng thái, mạng phát sóng, loại chương trình.

### 👤 Trang diễn viên (People)
- **Hồ sơ cá nhân**: ảnh, giới tính, nơi sinh, ngày sinh.
- **Tiểu sử chi tiết** (Biography).
- **Lĩnh vực hoạt động** (Known For Department).
- **Filmography** — Danh sách phim/TV Show đã tham gia (combined credits).

### 🎞️ Popup Modal — Xem Trailer
- Hệ thống **Modal Context** (React Context API).
- Mở/đóng popup xem trailer mượt mà với overlay backdrop.
- Tự động lock scroll body khi modal đang mở.

---

## 📁 Cấu trúc thư mục

```
MOVIE_APP/
├── public/
│   ├── fonts/                    # Netflix Sans font family
│   ├── images/                   # Static images & favicon
│   ├── ActorNoImage.svg          # Placeholder ảnh diễn viên
│   └── netflix.png               # Logo header
├── src/
│   ├── components/
│   │   ├── FeatureMovies/        # Banner carousel phim nổi bật
│   │   │   ├── index.jsx
│   │   │   ├── Movie.jsx
│   │   │   └── PaginateIndicator.jsx
│   │   ├── MediaDetail/          # Components trang chi tiết
│   │   │   ├── ActorInfo.jsx
│   │   │   ├── ActorList.jsx
│   │   │   ├── Banner.jsx
│   │   │   ├── MovieInformation.jsx
│   │   │   ├── TVShowInformation.jsx
│   │   │   ├── SeasonsList.jsx
│   │   │   └── RelatedMediaList.jsx
│   │   ├── MediaList/            # Danh sách phim với tab
│   │   │   └── index.jsx
│   │   ├── SearchForm/           # Form tìm kiếm nâng cao
│   │   │   ├── index.jsx
│   │   │   ├── FormField.jsx
│   │   │   └── FormInputs/
│   │   ├── CircularProgressBar.jsx
│   │   ├── Header.jsx            # Navigation header
│   │   ├── Image.jsx             # Image component + fallback
│   │   ├── Loading.jsx           # Loading spinner
│   │   └── MovieCard.jsx         # Card hiển thị phim
│   ├── context/
│   │   └── ModalProvider.jsx     # Context quản lý popup modal
│   ├── hooks/
│   │   └── useFetch.jsx          # Custom hook gọi API
│   ├── libs/
│   │   ├── constants.js          # Hằng số (tabs, gender mapping)
│   │   └── utils.js              # Hàm tiện ích (currency formatter)
│   ├── pages/
│   │   ├── HomePage.jsx          # Trang chủ
│   │   ├── MovieDetail.jsx       # Chi tiết phim
│   │   ├── TVShowDetail.jsx      # Chi tiết TV Show
│   │   ├── PeoplePage.jsx        # Trang diễn viên
│   │   ├── SearchPage.jsx        # Trang tìm kiếm
│   │   └── RootLayout.jsx        # Layout gốc (Header + Outlet)
│   ├── index.css                 # Global styles + TailwindCSS
│   └── main.jsx                  # Entry point + Router config
├── .env                          # Biến môi trường (API keys)
├── .prettierrc                   # Prettier config
├── eslint.config.js              # ESLint config
├── index.html                    # HTML entry point
├── jsconfig.json                 # Path aliases config
├── vite.config.js                # Vite + path aliases config
├── tailwind.config.js            # TailwindCSS config
├── postcss.config.js             # PostCSS config
├── package.json
└── README.md
```

---

## 🗺️ Routing

| Route | Page | Mô tả |
|---|---|---|
| `/` | `HomePage` | Trang chủ — Feature, Trending, Top Rated |
| `/movie/:id` | `MovieDetail` | Chi tiết phim (lazy loaded) |
| `/tv/:id` | `TVShowDetail` | Chi tiết TV Show (lazy loaded) |
| `/people/:id` | `PeoplePage` | Thông tin diễn viên (lazy loaded + route loader) |
| `/search` | `SearchPage` | Tìm kiếm & lọc phim nâng cao |

> 💡 Các trang `MovieDetail`, `TVShowDetail`, `HomePage`, `PeoplePage` đều sử dụng **React.lazy()** + **Suspense** để code splitting, giúp giảm bundle size và tăng tốc tải trang.

---

## ⚙️ Cài đặt & Chạy dự án

### Yêu cầu hệ thống

- **Node.js** >= 18.x
- **npm** >= 9.x
- **TMDb API Key** — Đăng ký miễn phí tại [themoviedb.org](https://www.themoviedb.org/settings/api)

### Các bước cài đặt

**1. Clone repository:**

```bash
git clone https://github.com/haunguyen79/Movie-App.git
cd Movie-App
```

**2. Cài đặt dependencies:**

```bash
npm install
```

**3. Cấu hình biến môi trường:**

Tạo file `.env` ở thư mục gốc:

```env
VITE_API_TOKEN=your_tmdb_api_read_access_token
VITE_API_HOST=https://api.themoviedb.org/3
```

> ⚠️ `VITE_API_TOKEN` là **API Read Access Token** (Bearer Token), không phải API Key thông thường. Có thể lấy tại [TMDb Settings > API](https://www.themoviedb.org/settings/api).

**4. Chạy development server:**

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

**5. Build production:**

```bash
npm run build
```

---

## 🏗️ Kiến trúc & Design Patterns

### Custom Hook — `useFetch`
- Hook tái sử dụng để gọi TMDb API với Bearer Token authentication.
- Hỗ trợ **conditional fetching** thông qua tham số `enable`.
- Tự động quản lý trạng thái `isLoading` và `data`.

### Context API — Modal Provider
- Quản lý trạng thái popup modal toàn ứng dụng.
- Cung cấp hàm `openPopup(content)` cho mọi component con.
- Tự động lock/unlock scroll body.

### Path Aliases
Sử dụng Vite aliases cho import gọn gàng:

```js
"@"          → src/
"@components" → src/components/
"@pages"      → src/pages/
"@hooks"      → src/hooks/
"@libs"       → src/libs/
"@context"    → src/context/
```

### Code Splitting
- **React.lazy()** cho các page components.
- **React.Suspense** với Loading fallback.
- Giảm đáng kể First Contentful Paint (FCP).

### Custom Font
- Sử dụng **Netflix Sans** (Regular, Light, Medium, Bold) — font tùy chỉnh được host local tại `/public/fonts/`.

---

## 📜 Scripts

| Script | Lệnh | Mô tả |
|---|---|---|
| `dev` | `npm run dev` | Chạy Vite dev server (HMR) |
| `build` | `npm run build` | Build production bundle |
| `preview` | `npm run preview` | Preview bản build local |
| `lint` | `npm run lint` | Kiểm tra code style với ESLint |

---

## 🌐 API Reference

Ứng dụng sử dụng [TMDb API v3](https://developer.themoviedb.org/docs) với các endpoint chính:

| Endpoint | Mô tả |
|---|---|
| `GET /trending/{media_type}/day` | Phim/TV đang thịnh hành |
| `GET /movie/top_rated` | Phim được đánh giá cao |
| `GET /tv/top_rated` | TV Show được đánh giá cao |
| `GET /movie/{id}` | Chi tiết phim (+ credits, videos, release_dates) |
| `GET /tv/{id}` | Chi tiết TV (+ content_ratings, aggregate_credits, videos) |
| `GET /movie/{id}/recommendations` | Phim liên quan |
| `GET /tv/{id}/recommendations` | TV Show liên quan |
| `GET /person/{id}` | Thông tin diễn viên (+ combined_credits) |
| `GET /discover/{media_type}` | Khám phá theo bộ lọc (genre, rating) |

---

## 📱 Responsive Design

Ứng dụng responsive hoàn toàn trên các kích thước màn hình:

- 📱 **Mobile** (< 640px)
- 📱 **Tablet** (640px – 1024px)
- 💻 **Desktop** (> 1024px)

Sử dụng TailwindCSS breakpoints (`sm`, `lg`) và đơn vị `vw` cho typography linh hoạt.

---

## 🚀 Deploy

Ứng dụng được deploy trên **Vercel**:

1. Push code lên GitHub.
2. Import repository vào [Vercel](https://vercel.com).
3. Cấu hình **Environment Variables** (`VITE_API_TOKEN`, `VITE_API_HOST`).
4. Vercel tự động build & deploy mỗi khi push code mới.

---

## 📄 License
  
Dữ liệu phim được cung cấp bởi [TMDb](https://www.themoviedb.org/)

<p align="center">
  <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" width="200" alt="TMDb Logo"/>
</p>

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/haunguyen79">haunguyen79</a>
</p>