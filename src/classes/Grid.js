import { GridItem } from './GridItem';

export class Grid {
  constructor(element) {
    this.grid = element;
  }

  AddNote(title, content) {
    const gridItem = new GridItem();
    gridItem.createNote(title, content);
    this.currentDir.notes.push(gridItem);
    this.Redraw();

    console.log('Note added');
  }

  AddFolder(title) {
    const gridItem = new GridItem();
    const backFolder = new GridItem();

    gridItem.createFolder(title);
    backFolder.createFolder('...');

    gridItem.folders.push(backFolder);

    this.currentDir.folders.push(gridItem);
    this.currentDir.folders.sort((a, b) => (a.Title > b.Title ? 1 : -1));

    this.Redraw();

    console.log('Folder added');
  }

  Redraw() {
    this.grid.innerHTML = '';
    this.currentDir.folders &&
      this.currentDir.folders.forEach(f => {
        this.grid.appendChild(f.Handle);
      });
    // must redraw in alternate order!!!!!!
    this.currentDir.notes &&
      this.currentDir.notes.forEach(n => {
        this.grid.appendChild(n.Handle);
      });
  }

  get Handle() {
    return this.grid;
  }

  get CurrentDir() {
    return this.currentDir;
  }

  set CurrentDir(folder) {
    this.currentDir = folder;
    document.getElementById('grid__path').innerText = this.currentDir.Id;

    this.Redraw();
  }
}
