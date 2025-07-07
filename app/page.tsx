import Navbar from './component/navbar';
import BottomBar from './component/bottom';
import fs from 'fs';
import Link from 'next/link';
import path from 'path';

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

export default async function Home() {
    const notesList = await getNotesList(); // Fetch notes list at build time

    return (
        <main className="container py-0">
            <Navbar />
            <div className='my-3 note stage '>
                <div className="card">
                    <div className="card-body">
                        <h1 className='h2 fw-bold'>notes</h1>
                        <p>things I write and publish.</p>

                        <ul style={{ listStyle: "none", marginTop: "24px 0" }} className="px-0">
                            {notesList.length > 0 ? (
                                notesList.map((note) => (
                                    <li key={note.filename} className="notes-list-item mb-2">
                                        <span className="fw-bold">
                                            <Link href={`/note/${note.filename}`}>{note.title}</Link>
                                        </span>
                                        <span className="date fw-bold">{note.date}</span>
                                    </li>
                                ))
                            ) : (
                                <li>No notes found</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <BottomBar />
        </main>
    );
}
