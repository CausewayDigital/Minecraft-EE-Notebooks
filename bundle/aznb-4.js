webpackJsonpAzureNotebooks([4],{4491:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),o=(n.n(l),n(24)),i=n(16),s=(n.n(i),n(71)),r=n(30),a=n(70),c=n(61),d=n(1883),u=n(499),C=n(96),p=n(198);const h=c.i.div`
  margin: 6px 0;
  width: 1px;
  height: 32px;
  background: ${e=>e.theme.palette.neutralQuaternary};
`,m=Object(c.i)(c.b)`
  background: white;
  align-items: center;
  height: 45px;
  border-bottom: 1px solid ${e=>e.theme.palette.neutralTertiaryAlt};
`,R=Object(c.i)(d.a)`
  div.ms-CommandBar {
    padding: 0 0 0 6px;
    background-color: inherit;
    height: 44px;
  }

  button {
    background-color: inherit;
    min-width: unset;
    padding: 0 8px;
    border: none;
  }

  i {
    font-size: 20px;
  }

  button > i {
    color: #0078d4;
  }

  button.is-disabled > i {
    color: ${e=>e.theme.palette.neutralQuaternary};
  }
`,b=c.i.output`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
  -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`,S={padding:"8px"};class k extends l.Component{constructor(e){super(e),this.state={screenReaderAnnouncement:""}}render(){return this.locStrings=Object(u.a)(this.context),l.createElement(m,null,l.createElement(R,{items:this.getToolbarItems(this.props),overflowItems:this.getMainMenuItems(),overflowButtonProps:{ariaLabel:this.locStrings.CommandMoreCommands,menuProps:{items:[]},style:S,disabled:!1},ariaLabel:this.locStrings.CommandBarHint}),l.createElement(b,{id:"feedbackStatus","aria-live":"assertive"},this.state.screenReaderAnnouncement))}getToolbarItems(e){return[{key:"run-all-cells",text:this.locStrings.CommandRunAllCells,iconProps:{iconName:"FastForward"},role:"button",split:!0,iconOnly:!0,style:{padding:"14px"},ariaLabel:this.locStrings.CommandRunAllCellsAria,"data-automation-id":"restartAndRunAllCellsButton",onClick:this.onClickRunAllCells.bind(this),subMenuProps:{items:[{key:"restart-and-run-all",text:this.locStrings.CommandRestartAndRunCells,ariaLabel:this.locStrings.CommandRestartAndRunCells,"data-automation-id":"restartAndRunAllCellsButton",onClick:this.onClickRestartAndRunAll.bind(this)},{key:"run-all-above",text:this.locStrings.CommandRunAllCellsAbove,ariaLabel:this.locStrings.CommandRunAllCellsAbove,"data-automation-id":"runAllCellsAboveButton",onClick:this.onClickRunAllCellsAbove.bind(this)},{key:"run-all-below",text:this.locStrings.CommandRunAllCellsBelow,ariaLabel:this.locStrings.CommandRunAllCellsBelow,"data-automation-id":"runAllCellsBelowButton",onClick:this.onClickRunAllCellsBelow.bind(this)}]}},{key:"restart-kernel",text:this.props.connectedToKernel?this.locStrings.CommandRestartKernel:this.locStrings.CommandDisabledButtonHint,role:"button",iconProps:{iconName:"Refresh"},iconOnly:!0,ariaLabel:this.props.connectedToKernel?this.locStrings.CommandRestartKernel:this.locStrings.CommandDisabledButtonHint,"data-automation-id":"restartKernelButton",onClick:this.onClickRestart.bind(this),disabled:!this.props.connectedToKernel},{key:"interrupt",text:this.props.connectedToKernel?this.locStrings.CommandInterruptKernel:this.locStrings.CommandDisabledButtonHint,role:"button",iconProps:{iconName:"Blocked"},iconOnly:!0,ariaLabel:this.props.connectedToKernel?this.locStrings.CommandInterruptKernel:this.locStrings.CommandDisabledButtonHint,onClick:this.onClickInterrupt.bind(this),"data-automation-id":"interruptButton",disabled:!this.props.connectedToKernel},{key:"divider_1",onRender:()=>l.createElement(h,null)},{key:"clear-all-outputs",text:this.locStrings.CommandClearAllOutputs,role:"button",iconProps:{iconName:"PageRemove"},iconOnly:!0,ariaLabel:this.locStrings.CommandClearAllOutputs,onClick:this.onClickClearAllOutputs.bind(this),"data-automation-id":"clearAllOutputsButton"}]}getMainMenuItems(){return[{key:"menuFile",text:this.locStrings.MenuFile,"data-automation-id":"menuFile",ariaLabel:this.locStrings.MenuFile,subMenuProps:{items:[{key:"menuFileSave",text:this.locStrings.MenuFileSave,ariaLabel:this.locStrings.MenuFileSave,"data-automation-id":"menuFileSave",onClick:this.onClickSave.bind(this)}]}},{key:"menuEdit",text:this.locStrings.MenuEdit,ariaLabel:this.locStrings.MenuEdit,"data-automation-id":"menuEdit",subMenuProps:{items:[{key:"menuEditUndo",text:this.locStrings.CommandUndo,ariaLabel:this.locStrings.CommandUndo,"data-automation-id":"menuEditUndo",onClick:this.onClickUndo.bind(this),disabled:!this.props.focusedCellId},{key:"menuEditRedo",text:this.locStrings.CommandRedo,ariaLabel:this.locStrings.CommandRedo,"data-automation-id":"menuEditRedo",onClick:this.onClickRedo.bind(this),disabled:!this.props.focusedCellId},{key:"menuEditCutCell",text:this.locStrings.MenuEditCutCell,ariaLabel:this.locStrings.MenuEditCutCell,"data-automation-id":"menuEditCutCell",onClick:this.onClickCutCell.bind(this)},{key:"menuEditCopyCell",text:this.locStrings.MenuEditCopyCell,ariaLabel:this.locStrings.MenuEditCopyCell,"data-automation-id":"menuEditCopyCell",onClick:this.onClickCopyCell.bind(this)},{key:"menuEditPasteCellBelow",text:this.locStrings.MenuEditPasteCellBelow,ariaLabel:this.locStrings.MenuEditPasteCellBelow,"data-automation-id":"menuEditPasteCellBelow",onClick:this.onClickPasteCellBelow.bind(this)}]}}]}setScreenReaderStatusBar(e){this.state.screenReaderAnnouncement===e?this.setState({screenReaderAnnouncement:"\xa0"+e}):this.setState({screenReaderAnnouncement:e})}onClickInterrupt(){const{contentRef:e,kernelRef:t,interruptKernel:n}=this.props;n(t,e),this.setScreenReaderStatusBar(this.locStrings.InterruptKernelScreenReaderFeedback)}onClickRestart(){const{contentRef:e,kernelRef:t,restartKernel:n}=this.props;n(e,t)}onClickRestartAndRunAll(){const{contentRef:e,kernelRef:t,restartAndRunCells:n,runAllCells:l}=this.props;this.props.connectedToKernel?(n(e,t),this.setScreenReaderStatusBar(this.locStrings.RestartAndRunCellsScreenReaderFeedback)):(l(e),this.setScreenReaderStatusBar(this.locStrings.RunAllCellsScreenReaderFeedback))}onClickRunAllCells(){const{contentRef:e,runAllCells:t}=this.props;t(e),this.setScreenReaderStatusBar(this.locStrings.RunAllCellsScreenReaderFeedback)}onClickRunAllCellsAbove(){const{contentRef:e,runAllCellsAbove:t}=this.props;t(e),this.setScreenReaderStatusBar(this.locStrings.RunAllCellsAboveScreenReaderFeedback)}onClickRunAllCellsBelow(){const{contentRef:e,runAllCellsBelow:t}=this.props;t(e),this.setScreenReaderStatusBar(this.locStrings.RunAllCellsBelowScreenReaderFeedback)}onClickClearAllOutputs(){const{contentRef:e,clearAllOutputs:t}=this.props;t(e),this.setScreenReaderStatusBar(this.locStrings.CellClearAllOutputsScreenReaderFeedback)}onClickSave(){const{contentRef:e,saveNotebook:t}=this.props;t(e),this.setScreenReaderStatusBar(this.locStrings.FileSaveScreenReaderFeedback)}onClickCopyCell(){const{contentRef:e,copyCell:t}=this.props;t(e),this.setScreenReaderStatusBar(this.locStrings.CopyCellScreenReaderFeedback)}onClickCutCell(){const{contentRef:e,cutCell:t}=this.props;t(e),this.setScreenReaderStatusBar(this.locStrings.CutCellScreenReaderFeedback)}onClickPasteCellBelow(){const{contentRef:e,pasteCellBelow:t}=this.props;t(e),this.setScreenReaderStatusBar(this.locStrings.PasteCellScreenReaderFeedback)}onClickUndo(){const{focusedCellId:e}=this.props;if(e){const t=document.getElementById(`editor-${e}`);t&&t.dispatchEvent(new Event("undo"))}this.setScreenReaderStatusBar(this.locStrings.UndoScreenReaderFeedback)}onClickRedo(){const{focusedCellId:e}=this.props;if(e){const t=document.getElementById(`editor-${e}`);t&&t.dispatchEvent(new Event("redo"))}this.setScreenReaderStatusBar(this.locStrings.RedoScreenReaderFeedback)}}t.Toolbar=k;k.contextType=C.a,t.default=Object(o.connect)(e=>{const t=i.selectors.model(e,{contentRef:Object(r.firstContentRef)(e)});return{contentRef:Object(r.firstContentRef)(e),kernelRef:i.selectors.kernelRefByContentRef(e,{contentRef:Object(r.firstContentRef)(e)}),connectedToKernel:p.connectedToKernel(e),focusedCellId:t&&"notebook"===t.type?i.selectors.notebook.cellFocused(t):void 0}},e=>({restartKernel:(t,n)=>{e(a.b.restartKernel({contentRef:t,kernelRef:n,outputHandling:"None"}))},interruptKernel:(t,n)=>{e(a.b.interruptKernel({kernelRef:t,contentRef:n}))},restartAndRunCells:(t,n)=>{e(a.b.restartKernel({contentRef:t,kernelRef:n,outputHandling:"Run All"}))},runAllCells:t=>{e(s.b.initiateConnectToComputeTarget()),e(i.actions.executeAllCells({contentRef:t}))},runAllCellsAbove:t=>{e(s.b.initiateConnectToComputeTarget()),e(a.b.executeAllCellsAbove({contentRef:t}))},runAllCellsBelow:t=>{e(s.b.initiateConnectToComputeTarget()),e(i.actions.executeAllCellsBelow({contentRef:t}))},insertCellBelow:(t,n)=>{e(i.actions.createCellBelow({contentRef:t,cellType:n,source:""}))},clearAllOutputs:t=>{e(i.actions.clearAllOutputs({contentRef:t}))},saveNotebook:t=>{e(a.b.saveNotebook({contentRef:t}))},cutCell:t=>{e(i.actions.cutCell({contentRef:t}))},copyCell:t=>{e(i.actions.copyCell({contentRef:t}))},pasteCellBelow:t=>{e(i.actions.pasteCell({contentRef:t}))}}))(k)}});
//# sourceMappingURL=aznb-4.js.map