interface PosData {
  n: number;
  x: number;
  y: number;
}

interface ChoiceProps {
  rowIndex: number;
  columnIndex: number;
}

type ColumnContent = number | undefined;
export type Grid = ColumnContent[][];

const ROW_COUNT = 5;
const COL_COUNT = 8;

const MAX_NUMBER = 4;

export default class GridMaker {
  public grid: Grid = this.pristineGrid;
  private shadowGrid: Grid | null = null;
  private recordedChoice: ChoiceProps[] = [];

  private get pristineGrid(): Grid {
    return Array.from({ length: ROW_COUNT }).map(() =>
      Array.from({ length: COL_COUNT })
    );
  }

  public generate() {
    const positions: PosData[] = Array.from({ length: MAX_NUMBER }).map(
      (_, i) => {
        return {
          n: i + 1,
          x: Math.round(Math.random() * (COL_COUNT - 1)),
          y: Math.round(Math.random() * (ROW_COUNT - 1))
        };
      }
    );
    positions.forEach(({ x, y, n }) => {
      this.grid[y][x] = n;
    });
  }

  private hideGrid() {
    if (this.shadowGrid) return;
    this.shadowGrid = this.grid.slice();
    this.grid = this.pristineGrid;
  }

  private showGrid() {
    if (!this.shadowGrid) return;
    this.grid = this.shadowGrid;
    this.shadowGrid = null;
  }

  public recordChoice(choice: ChoiceProps) {
    this.hideGrid();
    // console.log("this.recordedChoice.length: ", this.recordedChoice.length);
    this.recordedChoice.push(choice);
    if (this.recordedChoice.length === MAX_NUMBER) {
      this.showGrid();
      this.recordedChoice = [];
    }
  }
}
