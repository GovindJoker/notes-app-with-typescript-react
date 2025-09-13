import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Navigate, Routes, Route } from "react-router-dom";
import NewNotes from "./pages/NewNotes";
import { useLocalStorage } from "./components/useLocalStorags";

export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  markdown: string;
  tags?: Tag[];
};
export type Tag = {
  id: string;
  label: string;
};

type RawNote = {
  id: string;
};

type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag>("TAGS", []);


  return (
    <Container>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/new" element={<NewNotes />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/:id">
          <Route index element={<h1>home</h1>} />
          <Route path="edit" element={<h1>home</h1>} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
