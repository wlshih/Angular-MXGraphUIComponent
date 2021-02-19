import { ICreateComponentStrategy } from "./ICreateComponentStrategy";
import { StyleLibrary } from "../styleLibrary";
import { GraphEditorService } from "../services/graph-editor.service";

export class ProgressSpinnerStrategy extends ICreateComponentStrategy {

  constructor(geometry?) {
    super(geometry);
  }

  createProgressSpinnerVertex(graphEditorService: GraphEditorService, progressSpinnerComponent, parent:mxCell) {
    console.log(progressSpinnerComponent);
    const style = StyleLibrary[0]["spinner"];
    // spinner has no text field
    // const width = 15 * progressSpinnerComponent.text.length;
    const width = 15;
    const height = 40;
    const progressSpinnerGeometry = new mxGeometry(this.basex, this.basey, width, height);


    let progressSpinnerCell = graphEditorService.insertVertex(progressSpinnerComponent.text, progressSpinnerGeometry, parent, style);
    console.log(progressSpinnerCell)
    progressSpinnerCell["componentPart"] = "progress_spinner";
    progressSpinnerCell["isPrimary"] = true;
    progressSpinnerCell["componentID"] = progressSpinnerComponent.id;
    return progressSpinnerCell;
  }

  createComponent(graphEditorService: GraphEditorService, progressSpinnerComponent, parent:mxCell) {
    let progressSpinnerVertex = this.createProgressSpinnerVertex(graphEditorService, progressSpinnerComponent, parent);
    return progressSpinnerVertex;
  }
}
