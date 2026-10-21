import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";

const CoursesPage = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">教材ロードマップ</h1>
    <p className="text-gray-600">ステップごとの教材をここに配置していきます。</p>
  </div>
);

const GalleryPage = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">作品ギャラリー</h1>
    <p className="text-gray-600">コミュニティメンバーの作品一覧がここに表示されます。</p>
  </div>
);

const ProfilePage = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">マイページ</h1>
    <p className="text-gray-600">学習進捗や獲得スキルがここに表示されます。</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col text-gray-900">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <footer className="border-t border-gray-200 bg-white py-6 text-center text-sm text-gray-500">
          © 2026 EduPresent - 学びの楽しさを伝えるプレゼンコミュニティ
        </footer>
      </div>
    </BrowserRouter>
  );
}