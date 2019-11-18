import { GridItem, ItemType, FolderType } from './GridItem';

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

    gridItem.createFolder(FolderType.folder, title);
    backFolder.createFolder(FolderType.backFolder, '...');

    gridItem.folders.push(backFolder);

    this.currentDir.folders.push(gridItem);
    this.currentDir.folders.sort((a, b) => (a.Title > b.Title ? 1 : -1));

    this.Redraw();

    console.log('Folder added');
  }

  RemoveItem(type, item) {
    switch (type) {
      case ItemType.note:
        delete this.currentDir.notes[this.currentDir.notes.indexOf(item)];
        break;
      case ItemType.folder:
        delete this.currentDir.folders[this.currentDir.folders.indexOf(item)];
        break;
    }
    this.Redraw();
  }

  Redraw() {
    this.grid.innerHTML = '';
    this.currentDir.folders &&
      this.currentDir.folders.forEach(f => {
        if (f.folderType === FolderType.backFolder) {
          f.Handle.style.backgroundImage = 'url(./src/images/back.svg)';
          this.grid.insertAdjacentElement('afterbegin', f.Handle);
        } else {
          this.grid.appendChild(f.Handle);
        }
      });
    this.currentDir.notes &&
      this.currentDir.notes.reverse().forEach(n => {
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

    this.Redraw();
  }
}
