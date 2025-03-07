// !!! This code was automatically generated. You should not change it !!!
import { Component, AfterViewInit, Input, SimpleChanges } from '@angular/core'
import {
  Graph,
  GraphConfigInterface,
  ContainerCore,
  GraphInputNode,
  GraphInputLink,
  VisEventType,
  VisEventCallback,
  GraphLayoutType,
  StringAccessor,
  GraphForceLayoutSettings,
  NumericAccessor,
  GenericAccessor,
  GraphLinkStyle,
  GraphLinkArrowStyle,
  ColorAccessor,
  BooleanAccessor,
  GraphCircleLabel,
  GraphNodeShape,
  GraphPanelConfig,
} from '@unovis/ts'
import { VisCoreComponent } from '../../core'

@Component({
  selector: 'vis-graph',
  template: '',
  // eslint-disable-next-line no-use-before-define
  providers: [{ provide: VisCoreComponent, useExisting: VisGraphComponent }],
})
export class VisGraphComponent<N extends GraphInputNode, L extends GraphInputLink> implements GraphConfigInterface<N, L>, AfterViewInit {
  /** Animation duration of the data update transitions in milliseconds. Default: `600` */
  @Input() duration?: number

  /** Events configuration. An object containing properties in the following format:
   *
   * ```
   * {
   * \[selectorString]: {
   *     \[eventType]: callbackFunction
   *  }
   * }
   * ```
   * e.g.:
   * ```
   * {
   * \[Area.selectors.area]: {
   *    click: (d) => console.log("Clicked Area", d)
   *  }
   * }
   * ``` */
  @Input() events?: {
    [selector: string]: {
      [eventType in VisEventType]?: VisEventCallback
    };
  }

  /** You can set every SVG and HTML visualization object to have a custom DOM attributes, which is useful
   * when you want to do unit or end-to-end testing. Attributes configuration object has the following structure:
   *
   * ```
   * {
   * \[selectorString]: {
   *     \[attributeName]: attribute constant value or accessor function
   *  }
   * }
   * ```
   * e.g.:
   * ```
   * {
   * \[Area.selectors.area]: {
   *    "test-value": d => d.value
   *  }
   * }
   * ``` */
  @Input() attributes?: {
    [selector: string]: {
      [attr: string]: string | number | boolean | ((datum: any) => string | number | boolean);
    };
  }

  /** Zoom level constraints. Default: [0.35, 1.25] */
  @Input() zoomScaleExtent?: [number, number]

  /** Disable zooming. Default: `false` */
  @Input() disableZoom?: boolean

  /** Disable node dragging. Default: `false` */
  @Input() disableDrag?: boolean

  /** Interval to re-render the graph when zooming. Default: `100` */
  @Input() zoomThrottledUpdateNodeThreshold?: number

  /** Zoom event callback. Default: `undefined` */
  @Input() onZoom?: (zoomScale: number, zoomScaleExtent: number) => void

  /** Type of the graph layout. Default: `GraphLayoutType.Force` */
  @Input() layoutType?: GraphLayoutType | string

  /** Fit the graph to container on data or config updates, or on container resize. Default: `true` */
  @Input() layoutAutofit?: boolean

  /** Tolerance constant defining whether the graph should be fitted to container
   * (on data or config update, or container resize) after a zoom / pan interaction or not.
   * `0` — Stop fitting after any pan or zoom
   * `Number.POSITIVE_INFINITY` — Always fit
   * Default: `8.0` */
  @Input() layoutAutofitTolerance?: number

  /** Place non-connected nodes at the bottom of the graph. Default: `false` */
  @Input() layoutNonConnectedAside?: boolean

  /** Node group accessor function.
   * Only for `GraphLayoutType.Parallel`, `GraphLayoutType.ParallelHorizontal` and `GraphLayoutType.Concentric` layouts.
   * Default: `node => node.group` */
  @Input() layoutNodeGroup?: StringAccessor<N>

  /** Order of the layout groups.
   * Only for `GraphLayoutType.Parallel`, `GraphLayoutType.ParallelHorizontal` and `GraphLayoutType.Concentric` layouts.
   * Default: `[]` */
  @Input() layoutGroupOrder?: string[]

  /** Sets the number of nodes in a sub-group after which they'll continue on the next column (or row if `layoutType` is
   * `GraphLayoutType.ParallelHorizontal`).
   * Only for `GraphLayoutType.Parallel` and `GraphLayoutType.ParallelHorizontal` layouts.
   * Default: `6` */
  @Input() layoutParallelNodesPerColumn?: number

  /** Node sub-group accessor function.
   * Only for `GraphLayoutType.Parallel` and `GraphLayoutType.ParallelHorizontal` layouts.
   * Default: `node => node.subgroup` */
  @Input() layoutParallelNodeSubGroup?: StringAccessor<N>

  /** Number of sub-groups per row (or column if `layoutType` is `GraphLayoutType.ParallelHorizontal`) in a group.
   * Only for `GraphLayoutType.Parallel` and `GraphLayoutType.ParallelHorizontal` layouts.
   * Default: `1` */
  @Input() layoutParallelSubGroupsPerRow?: number

  /** Spacing between groups.
   * Only for `GraphLayoutType.Parallel` and `GraphLayoutType.ParallelHorizontal` layouts.
   * Default: `undefined` */
  @Input() layoutParallelGroupSpacing?: number

  /** Set a group by name to have priority in sorting the graph links.
   * Only for `GraphLayoutType.Parallel` and `GraphLayoutType.ParallelHorizontal` layouts.
   * Default: `undefined` */
  @Input() layoutParallelSortConnectionsByGroup?: string

  /** Force Layout settings, see the `d3-force` package for more details */
  @Input() forceLayoutSettings?: GraphForceLayoutSettings

  /** Darge Layout settings, see the `dagrejs` package
   * for more details: https://github.com/dagrejs/dagre/wiki#configuring-the-layout */
  @Input() dagreLayoutSettings?: {
    rankdir: string;
    ranker: string;
    [key: string]: any;
  }

  /** Link width accessor function ot constant value. Default: `1` */
  @Input() linkWidth?: NumericAccessor<L>

  /** Link style accessor function or constant value. Default: `GraphLinkStyle.Solid` */
  @Input() linkStyle?: GenericAccessor<GraphLinkStyle, L>

  /** Link band width accessor function or constant value. Default: `0` */
  @Input() linkBandWidth?: NumericAccessor<L>

  /** Link arrow accessor function or constant value. Default: `undefined` */
  @Input() linkArrow?: GenericAccessor<GraphLinkArrowStyle, L> | undefined

  /** Link stroke color accessor function or constant value. Default: `undefined` */
  @Input() linkStroke?: ColorAccessor<L>

  /** Link disabled state accessor function or constant value. Default: `false` */
  @Input() linkDisabled?: BooleanAccessor<L>

  /** Link flow animation accessor function or constant value. Default: `false` */
  @Input() linkFlow?: BooleanAccessor<L>

  /** Animation duration of the flow (traffic) circles. Default: `20000` */
  @Input() linkFlowAnimDuration?: number

  /** Size of the moving particles that represent traffic flow. Default: `2` */
  @Input() linkFlowParticleSize?: number

  /** Link label accessor function or constant value. Default: `undefined` */
  @Input() linkLabel?: GenericAccessor<GraphCircleLabel, L> | undefined

  /** Shift label along the link center a little bit to avoid overlap with the link arrow. Default: `true` */
  @Input() linkLabelShiftFromCenter?: BooleanAccessor<L>

  /** Spacing between neighboring links. Default: `8` */
  @Input() linkNeighborSpacing?: number

  /** Set selected link by its unique id. Default: `undefined` */
  @Input() selectedLinkId?: number | string

  /** Node size accessor function or constant value. Default: `30` */
  @Input() nodeSize?: NumericAccessor<N>

  /** Node stroke width accessor function or constant value. Default: `3` */
  @Input() nodeStrokeWidth?: NumericAccessor<N>

  /** Node shape accessor function or constant value. Default: `GraphNodeShape.Circle` */
  @Input() nodeShape?: GenericAccessor<GraphNodeShape | string, N>

  /** Node gauge outline accessor function or constant value in the range [0,100]. Default: `0` */
  @Input() nodeGaugeValue?: NumericAccessor<N>

  /** Node gauge outline fill color accessor function or constant value. Default: `undefined` */
  @Input() nodeGaugeFill?: ColorAccessor<N>

  /** Animation duration of the node gauge outline. Default: `1500` */
  @Input() nodeGaugeAnimDuration?: number

  /** Node central icon accessor function or constant value. Default: `node => node.icon` */
  @Input() nodeIcon?: StringAccessor<N>

  /** Node central icon size accessor function or constant value. Default: `undefined` */
  @Input() nodeIconSize?: NumericAccessor<N>

  /** Node label accessor function or constant value. Default: `node => node.label` */
  @Input() nodeLabel?: StringAccessor<N>

  /** Node sub-label accessor function or constant value: Default: `''` */
  @Input() nodeSubLabel?: StringAccessor<N>

  /** Node circular side labels accessor function. The function should return an array of GraphCircleLabel objects. Default: `undefined` */
  @Input() nodeSideLabels?: GenericAccessor<GraphCircleLabel[], N>

  /** Node bottom icon accessor function. Default: `undefined` */
  @Input() nodeBottomIcon?: StringAccessor<N>

  /** Node disabled state accessor function or constant value. Default: `false` */
  @Input() nodeDisabled?: BooleanAccessor<N>

  /** Node fill color accessor function or constant value. Default: `node => node.fill` */
  @Input() nodeFill?: ColorAccessor<N>

  /** Node stroke color accessor function or constant value. Default: `node => node.stroke` */
  @Input() nodeStroke?: ColorAccessor<N>

  /** Sorting function to determine node placement. Default: `undefined` */
  @Input() nodeSort?: ((a: N, b: N) => number)

  /** Specify the initial position for entering nodes as [x, y]. Default: `undefined` */
  @Input() nodeEnterPosition?: GenericAccessor<[number, number], N> | undefined

  /** Specify the initial scale for entering nodes in the range [0,1]. Default: `0.75` */
  @Input() nodeEnterScale?: NumericAccessor<N> | undefined

  /** Specify the destination position for exiting nodes as [x, y]. Default: `undefined` */
  @Input() nodeExitPosition?: GenericAccessor<[number, number], N> | undefined

  /** Specify the destination scale for exiting nodes in the range [0,1]. Default: `0.75` */
  @Input() nodeExitScale?: NumericAccessor<N> | undefined

  /** Set selected node by unique id. Default: `undefined` */
  @Input() selectedNodeId?: number | string

  /** Panels configuration. An array of `GraphPanelConfig` objects. Default: `[]` */
  @Input() panels?: GraphPanelConfig[] | undefined
  @Input() data: any

  component: Graph<N, L> | undefined
  public componentContainer: ContainerCore | undefined

  ngAfterViewInit (): void {
    this.component = new Graph<N, L>(this.getConfig())

    if (this.data) {
      this.component.setData(this.data)
      this.componentContainer?.render()
    }
  }

  ngOnChanges (changes: SimpleChanges): void {
    if (changes.data) { this.component?.setData(this.data) }
    this.component?.setConfig(this.getConfig())
    this.componentContainer?.render()
  }

  private getConfig (): GraphConfigInterface<N, L> {
    const { duration, events, attributes, zoomScaleExtent, disableZoom, disableDrag, zoomThrottledUpdateNodeThreshold, onZoom, layoutType, layoutAutofit, layoutAutofitTolerance, layoutNonConnectedAside, layoutNodeGroup, layoutGroupOrder, layoutParallelNodesPerColumn, layoutParallelNodeSubGroup, layoutParallelSubGroupsPerRow, layoutParallelGroupSpacing, layoutParallelSortConnectionsByGroup, forceLayoutSettings, dagreLayoutSettings, linkWidth, linkStyle, linkBandWidth, linkArrow, linkStroke, linkDisabled, linkFlow, linkFlowAnimDuration, linkFlowParticleSize, linkLabel, linkLabelShiftFromCenter, linkNeighborSpacing, selectedLinkId, nodeSize, nodeStrokeWidth, nodeShape, nodeGaugeValue, nodeGaugeFill, nodeGaugeAnimDuration, nodeIcon, nodeIconSize, nodeLabel, nodeSubLabel, nodeSideLabels, nodeBottomIcon, nodeDisabled, nodeFill, nodeStroke, nodeSort, nodeEnterPosition, nodeEnterScale, nodeExitPosition, nodeExitScale, selectedNodeId, panels } = this
    const config = { duration, events, attributes, zoomScaleExtent, disableZoom, disableDrag, zoomThrottledUpdateNodeThreshold, onZoom, layoutType, layoutAutofit, layoutAutofitTolerance, layoutNonConnectedAside, layoutNodeGroup, layoutGroupOrder, layoutParallelNodesPerColumn, layoutParallelNodeSubGroup, layoutParallelSubGroupsPerRow, layoutParallelGroupSpacing, layoutParallelSortConnectionsByGroup, forceLayoutSettings, dagreLayoutSettings, linkWidth, linkStyle, linkBandWidth, linkArrow, linkStroke, linkDisabled, linkFlow, linkFlowAnimDuration, linkFlowParticleSize, linkLabel, linkLabelShiftFromCenter, linkNeighborSpacing, selectedLinkId, nodeSize, nodeStrokeWidth, nodeShape, nodeGaugeValue, nodeGaugeFill, nodeGaugeAnimDuration, nodeIcon, nodeIconSize, nodeLabel, nodeSubLabel, nodeSideLabels, nodeBottomIcon, nodeDisabled, nodeFill, nodeStroke, nodeSort, nodeEnterPosition, nodeEnterScale, nodeExitPosition, nodeExitScale, selectedNodeId, panels }
    const keys = Object.keys(config) as (keyof GraphConfigInterface<N, L>)[]
    keys.forEach(key => { if (config[key] === undefined) delete config[key] })

    return config
  }
}
