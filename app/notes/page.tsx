import Navbar from '../component/navbar';
import BottomBar from '../component/bottom';
import fs from 'fs';
import Link from 'next/link';
import path from 'path';
import '@/app/note/[page]/note.css';

interface Note {
    title: string;
    date: string;
    filename: string;
}

async function getNotesList(): Promise<Note[]> {
    const notesDirectory = path.join(process.cwd(), "_notes");
    const filenames = fs.readdirSync(notesDirectory);

    return filenames.map((filename) => {
        const [date, ...titleParts] = filename.replace(/\.mdx$/, '').split('_');
        const title = titleParts.join(' ').replace(/-/g, ' '); // Format title with spaces
        return {
            date,
            title,
            filename: filename.replace(/\.mdx$/, '') // for linking
        };
    });
}

export default async function NotesBlog() {
    const notesList = await getNotesList(); // Fetch notes list at build time

    return (
        <main className="container py-0">
            <Navbar />
            <div className="mb-5 note stage">
                <h1>notes</h1>
                <p><b>things I write and publish.</b></p>

                <ul style={{ listStyle: "none", margin: "45px 0" }} className="px-0">
                    {notesList.length > 0 ? (
                        notesList.map((note) => (
                            <li key={note.filename} className="notes-list-item">
                                <p className="fw-bold">
                                    <Link href={`/note/${note.filename}`}>{note.title}</Link>
                                </p>
                                <p className="date fw-bold">{note.date}</p>
                            </li>
                        ))
                    ) : (
                        <li>No notes found</li>
                    )}
                </ul>
            </div>
            <BottomBar />
        </main>
    );
}