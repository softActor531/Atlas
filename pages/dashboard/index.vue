<template>
  <div class>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">Dashboard</h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-4">
        <div class="card-box">
          <div class="row">
            <div class="col-12">
              <div class="text-left">
                <h3 class="text-dark my-1"></h3>
                <p class="header-title">
                  Currently viewing data for:
                  <br />
                  <b>Marawan Aziz</b>
                </p>
                <p class="header-title">
                  Locations displayed:
                  <br />
                  <b>Bethel, Clark County, Martin County, Miami-Dade, Palm Beach, Sarasota, St Lucie, Test District</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- end card-box-->
      </div>
      <!-- end col -->
      <div class="col-xs-12 col-md-4">
        <div class="card-box">
          <div class="row">
            <div class="col-3">
              <div class="avatar-md bg-blue rounded shadow-lg">
                <i class="mdi mdi-map-marker-radius avatar-title font-22 text-white"></i>
              </div>
            </div>
            <div class="col-9">
              <div class="text-right">
                <h3 class="text-dark my-1"></h3>
                <p class="header-title">Select a district to view totals:</p>
                <form action method="get">
                  <select name="district" class="custom-select" id="district">
                    <option
                      :key="district.id"
                      v-for="district in districts"
                      :value="district.id"
                    >{{district.name}}</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- end card-box-->
      </div>
      <!-- end col -->
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-6 col-xl-2-5">
        <div class="widget-rounded-circle card-box">
          <div class="row">
            <div class="col-4">
              <div class="avatar-lg rounded-circle bg-hard-blue">
                <img src="@/assets/images/image11.png" />
              </div>
            </div>
            <div class="col-8">
              <div class="text-right">
                <h3 class="text-dark mt-1">
                  <span data-plugin="counterup">1,373</span>
                </h3>
                <p class="text-muted mb-1 text-truncate p-dashboard-intro">
                  <br />
                  <br />Total Active GCs
                  <i
                    class="mdi mdi-help-circle rounded-circle text-info custom-tooltip"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title
                    data-original-title="Represents the total of all GCs in an Orientation + Enrolled phase, inclusive of all statuses."
                  ></i>
                </p>
              </div>
            </div>
          </div>
          <!-- end row-->
        </div>
        <!-- end widget-rounded-circle-->
      </div>
      <!-- end col-->

      <div class="col-xs-12 col-md-6 col-xl-2-5">
        <div class="widget-rounded-circle card-box">
          <div class="row">
            <div class="col-4">
              <div class="avatar-lg rounded-circle bg-pink">
                <img src="@/assets/images/image10.png" />
              </div>
            </div>
            <div class="col-8">
              <div class="text-right">
                <h3 class="text-dark mt-1">
                  <span data-plugin="counterup">0.6</span>%
                </h3>
                <p class="text-muted mb-1 text-truncate p-dashboard-intro">
                  <br />
                  <br />Attended This week
                </p>
              </div>
            </div>
          </div>
          <!-- end row-->
        </div>
        <!-- end widget-rounded-circle-->
      </div>
      <!-- end col-->

      <div class="col-xs-12 col-md-6 col-xl-2-5">
        <div class="widget-rounded-circle card-box">
          <div class="row">
            <div class="col-4">
              <div class="avatar-lg rounded-circle bg-success">
                <i class="mdi mdi-television display-5 avatar-title text-"></i>
              </div>
            </div>
            <div class="col-8">
              <div class="text-right">
                <h3 class="text-dark mt-1">
                  <span data-plugin="counterup">0</span>%
                </h3>
                <p
                  class="text-muted mb-1 text-truncate p-dashboard-intro"
                  style=" text-overflow: clip;"
                >
                  <br />
                  <br />Online This Week
                  <i
                    class="mdi mdi-help-circle rounded-circle text-info custom-tooltip"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title
                    data-original-title="Represents the total of all students accessed Edmentum Sunday to current day. "
                  ></i>
                </p>
              </div>
            </div>
          </div>
          <!-- end row-->
        </div>
        <!-- end widget-rounded-circle-->
      </div>
      <!-- end col-->
      <div class="col-xs-12 col-md-6 col-xl-2-5">
        <div class="widget-rounded-circle card-box">
          <div class="row">
            <div class="col-4">
              <div class="avatar-lg rounded-circle bg-info">
                <i class="mdi mdi-trophy-outline display-5 avatar-title text-"></i>
              </div>
            </div>
            <div class="col-8">
              <div class="text-right">
                <h3 class="text-dark mt-1">
                  <span data-plugin="counterup">0</span>
                </h3>
                <p
                  class="text-muted mb-1 text-truncate p-dashboard-intro"
                  style=" text-overflow: clip;"
                >
                  <br />
                  <br />Courses Completed
                  <i
                    class="mdi mdi-help-circle rounded-circle text-info custom-tooltip"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title
                    data-original-title="Represents the total of all courses completed in Edmentum Monday to current day. "
                  ></i>
                </p>
              </div>
            </div>
          </div>
          <!-- end row-->
        </div>
        <!-- end widget-rounded-circle-->
      </div>
      <!-- end col-->

      <div class="col-xs-12 col-md-6 col-xl-2-5">
        <div class="widget-rounded-circle card-box">
          <div class="row">
            <div class="col-4">
              <div class="avatar-lg rounded-circle bg-orange">
                <i class="mdi mdi-account-plus-outline display-5 avatar-title text-"></i>
              </div>
            </div>
            <div class="col-8">
              <div class="text-right">
                <h3 class="text-dark mt-1">
                  <span data-plugin="counterup">216</span>
                </h3>
                <p class="text-muted mb-1 text-truncate p-dashboard-intro">
                  <br />
                  <br />New GCs Pending
                  <i
                    class="mdi mdi-help-circle rounded-circle text-info custom-tooltip"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title
                    data-original-title="Represents the total of all GCs in a Registration phase; inclusive of all statuses."
                  ></i>
                </p>
              </div>
            </div>
          </div>
          <!-- end row-->
        </div>
        <!-- end widget-rounded-circle-->
      </div>
      <!-- end col-->
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="card-box height-900">
          <h4 class="text-center bolder">
            Active GCs
            <i
              class="mdi mdi-help-circle rounded-circle text-info custom-tooltip"
              data-toggle="tooltip"
              data-placement="bottom"
              title
              data-original-title="At Risk represents the total of all GCs in a Retention status (1-4) inclusive of both the Orientation + Enrolled phases."
            ></i>
          </h4>
          <div id="chart-container">
            <span
              id="myChart"
              class="fusioncharts-container"
              style="position: relative; text-align: left; line-height: normal; display: inline-block; zoom: 1; vertical-align: middle; font-weight: normal; font-variant: normal; font-style: normal; text-decoration: none; padding: 0px; margin: 0px; border: none; direction: ltr; transform: none; width: 100%; height: 500px;"
            >
              <svg
                height="500"
                version="1.1"
                width="377"
                xmlns="http://www.w3.org/2000/svg"
                id="raphael-paper-6"
                style="overflow: hidden; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none; cursor: default; vertical-align: middle; position: relative; left: -0.7625px; top: -0.6px; background-color: rgb(255, 255, 255);"
              >
                <desc />
                <defs>
                  <clipPath id="rr-AF9236DB-68C6-4A37-B23D-5CB97B12BAF2">
                    <rect x="15" y="15" width="347" height="470" transform="matrix(1,0,0,1,0,0)" />
                  </clipPath>
                  <clipPath id="rr-59A0DBC8-7BD1-45AA-86DA-AD100F851B39">
                    <rect x="15" y="15" width="347" height="470" transform="matrix(1,0,0,1,0,0)" />
                  </clipPath>
                </defs>
                <g class="raphael-group-7-parentgroup">
                  <g class="raphael-group-8-background">
                    <rect
                      x="0"
                      y="0"
                      width="377"
                      height="500"
                      stroke="none"
                      fill-opacity="1"
                      fill="#ffffff"
                      ry="0"
                      rx="0"
                    />
                    <rect
                      x="0"
                      y="0"
                      width="377"
                      height="500"
                      stroke="#767575"
                      stroke-opacity="0.5"
                      stroke-width="0"
                      stroke-dasharray="none"
                      fill="none"
                      ry="0"
                      rx="0"
                    />
                  </g>
                  <g class="raphael-group-28-canvas" />
                  <g class="raphael-group-9-axisbottom" />
                  <g
                    class="raphael-group-30-axisReferenceVisualsFloor"
                    clip-path="url('#rr-AF9236DB-68C6-4A37-B23D-5CB97B12BAF2')"
                  />
                  <g class="raphael-group-29-axisReferenceVisualsBottom" />
                  <g class="raphael-group-10-belowplot" />
                  <g class="raphael-group-31-crossline" />
                  <g class="raphael-group-32-crosslineBottom" />
                  <g
                    class="raphael-group-35-axisReferenceVisualsMiddle"
                    clip-path="url('#rr-59A0DBC8-7BD1-45AA-86DA-AD100F851B39')"
                  />
                  <g class="raphael-group-37-quadrant" />
                  <g class="raphael-group-11-plots">
                    <g class="raphael-group-39-column-shadow-group" />
                    <g class="raphael-group-40-column" />
                    <g class="raphael-group-41-area-shadow-group" />
                    <g class="raphael-group-42-area" />
                    <g class="raphael-group-43-line-shadow-group" />
                    <g class="raphael-group-44-line" />
                    <g class="raphael-group-45-default-shadow-group" />
                    <g class="raphael-group-46-default" />
                    <path
                      d="M361.92080368461166,244.758354324892A173.5,173.5,0,0,1,362,249.99999999999997L304.1666666666667,249.99999999999997A115.66666666666667,115.66666666666667,0,0,0,304.11386912307444,246.505569549928Z"
                      fill="#2d589a"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M361.9179587577457,244.6650604223835A173.5,173.5,0,0,1,361.92080368461166,244.758354324892L304.11386912307444,246.505569549928A115.66666666666667,115.66666666666667,0,0,0,304.1119725051638,246.44337361492234Z"
                      fill="#f1964a"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M361.87990517265047,243.54566174401046A173.5,173.5,0,0,1,361.9179587577457,244.6650604223835L304.1119725051638,246.44337361492234A115.66666666666667,115.66666666666667,0,0,0,304.08660344843366,245.6971078293403Z"
                      fill="#62c54b"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M361.86284607572486,243.10263814748512A173.5,173.5,0,0,1,361.87990517265047,243.5456617440106L304.08660344843366,245.6971078293404A115.66666666666667,115.66666666666667,0,0,0,304.0752307171499,245.4017587649901Z"
                      fill="#b93ebd"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M361.8277659049618,242.27112127183017A173.5,173.5,0,0,1,361.86284607572486,243.10263814748512L304.0752307171499,245.4017587649901A115.66666666666667,115.66666666666667,0,0,0,304.0518439366412,244.8474141812201Z"
                      fill="#9a9da8"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M304.0518439366412,244.8474141812201A115.66666666666667,115.66666666666667,0,0,1,304.1666666666667,249.99999999999997L246.33333333333334,250A57.833333333333336,57.833333333333336,0,0,0,246.2759219683206,247.42370709061007Z"
                      fill="#5ec0c7"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M128.0568524691643,412.63110377958344A173.5,173.5,0,1,1,361.8277659049618,242.27112127183017L304.0518439366412,244.8474141812201A115.66666666666667,115.66666666666667,0,1,0,148.20456831277622,358.4207358530556Z"
                      fill="#2d589a"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M274.06574971565624,400.93294032648294A173.5,173.5,0,0,1,128.0568524691643,412.63110377958344L148.20456831277622,358.4207358530556A115.66666666666667,115.66666666666667,0,0,0,245.54383314377085,350.6219602176553Z"
                      fill="#f1964a"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M344.0633938074169,326.8263008813942A173.5,173.5,0,0,1,274.06574971565624,400.93294032648294L245.54383314377085,350.6219602176553A115.66666666666667,115.66666666666667,0,0,0,292.20892920494464,301.2175339209295Z"
                      fill="#62c54b"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M359.08747006513863,281.65699064622885A173.5,173.5,0,0,1,344.0633938074169,326.8263008813942L292.20892920494464,301.2175339209295A115.66666666666667,115.66666666666667,0,0,0,302.2249800434258,271.1046604308192Z"
                      fill="#ad4489"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M362,250A173.5,173.5,0,0,1,359.08747006513863,281.65699064622885L302.2249800434258,271.1046604308192A115.66666666666667,115.66666666666667,0,0,0,304.1666666666667,250Z"
                      fill="#a09a9c"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M304.1666666666667,250A115.66666666666667,115.66666666666667,0,1,1,304.0518439366412,244.8474141812201L246.2759219683206,247.42370709061007A57.833333333333336,57.833333333333336,0,1,0,246.33333333333334,250Z"
                      fill="#ccff66"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M130.66666666666666,250A57.833333333333336,57.833333333333336,0,0,0,246.33333333333334,250A57.833333333333336,57.833333333333336,0,0,0,130.66666666666666,250Z"
                      fill="#ffffff"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                  </g>
                  <g class="raphael-group-12-axistop" />
                  <g class="raphael-group-13-sumlabels fusioncharts-datalabels" />
                  <g class="raphael-group-36-axisReferenceVisualsTop" />
                  <g class="raphael-group-38-axisReferenceVisualsCeil" />
                  <g
                    class="raphael-group-14-datalabel"
                    font-family="Source Sans Pro"
                    font-size="14px"
                    font-weight="normal"
                    font-style="normal"
                    style="font-family: &quot;Source Sans Pro&quot;; font-size: 14px; font-weight: normal; font-style: normal; border-radius: 0px;"
                  >
                    <g class="raphael-group-34-canvasdatalabel" />
                    <text
                      fill-opacity="1"
                      fill="#000000"
                      x="188.5"
                      stroke="none"
                      text-anchor="middle"
                      y="246"
                      style="text-anchor: middle;"
                      opacity
                    >
                      <tspan x="188.5">554</tspan>
                      <tspan dy="16.8" x="188.5">at Risk</tspan>
                    </text>
                  </g>
                  <g class="raphael-group-33-crosslineTop" />
                  <g class="raphael-group-15-aboveplot" />
                  <g class="raphael-group-16-caption" />
                  <g class="raphael-group-17-chartdefault" />
                  <g class="raphael-group-18-chartdefault-shadow" />
                  <g class="raphael-group-19-tracker" />
                  <g class="raphael-group-20-logo" />
                  <g class="raphael-group-21-toolbar-master">
                    <g class="raphael-group-26-toolbar">
                      <rect
                        fill-opacity="0"
                        fill="#eeeeee"
                        stroke="#eeeeee"
                        stroke-opacity="0"
                        stroke-width="1"
                        width="0"
                        height="0"
                        x="367"
                        y="6"
                        ry="0"
                        rx="0"
                      />
                    </g>
                  </g>
                </g>
                <g class="raphael-group-ACxCgnng">
                  <text
                    font-size="0px"
                    font-family="Verdana,sans"
                    x="6"
                    text-anchor="start"
                    fill-opacity="0.5"
                    fill="#000000"
                    stroke="none"
                    y="493"
                    style="font-size: 0px; font-family: Verdana, sans; cursor: pointer; text-anchor: start;"
                  >FusionCharts Trial</text>
                </g>
                <rect
                  x="0"
                  y="0"
                  width="10"
                  height="30"
                  ry="0"
                  rx="0"
                  fill="none"
                  stroke="#000000"
                  style="display: none;"
                />
              </svg>
              <div
                type="div"
                style="left: auto; top: 0px; padding: 5px 3px; border: 1px solid rgb(100, 100, 100); margin: 0px; outline: none; position: absolute; z-index: 50; right: auto; overflow: hidden; background: rgb(255, 255, 255); box-shadow: rgb(153, 153, 153) 2px 2px 5px; display: none;"
              ></div>
              <div
                class="fc__tooltip fusioncharts-div"
                style="color: rgb(90, 90, 90); padding: 6px; font-size: 14px; overflow: hidden; border-width: 1px; border-color: rgb(225, 225, 225); white-space: nowrap; position: absolute; border-style: solid; background-color: rgb(255, 255, 255); user-select: none; top: 0px; left: 0px; visibility: hidden; pointer-events: none; box-shadow: none; border-radius: 2px; font-family: &quot;Source Sans Pro&quot;;"
              ></div>
            </span>
          </div>
          <div>
            <div class="text-center with-border">
              <h3 class="header-title my-1">
                <span data-plugin="counterup" class="display-bolder1">12.7</span>%
                <br />GCs in a retention status.
                <i
                  class="mdi mdi-help-circle rounded-circle text-info custom-tooltip"
                  data-toggle="tooltip"
                  data-placement="top"
                  title
                  data-original-title="Represents the % of GCs in a Retention status 3 or 4, inclusive of both the Orientation + Enrolled phases."
                ></i>
              </h3>
            </div>
          </div>
          <div>
            <table
              class="history-table"
              style="position:relative;font-size:smaller;color:#545454;width: 100%;"
            >
              <tbody>
                <tr>
                  <td class="cell_1">
                    <div style="line-height:1px;border:1px solid null;padding:1px">
                      <div
                        style="float:left;width:4px;height:0;border:5px solid #2BC5CA;overflow:hidden"
                      ></div>&nbsp;
                    </div>
                  </td>
                  <td class="legendLabel">
                    <div style="font-size:14px;">
                      &nbsp;
                      <strong>Enrolled</strong>
                    </div>
                  </td>
                  <td class="cell_3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td class="cell_4">
                    <b>1233</b>
                  </td>
                </tr>

                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="dote-child border-active"></div>
                    </div>
                    <div style="font-size:14px;">&nbsp;Active</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>674</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="dote-child border-retention1"></div>
                    </div>
                    <div style="font-size:14px;">&nbsp;Retention Phase 1</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>204</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="dote-child border-retention2"></div>
                    </div>
                    <div style="font-size:14px;">&nbsp;Retention Phase 2</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="dote-child border-retention3"></div>
                    </div>
                    <div style="font-size:14px;">&nbsp;Retention Phase 3</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>57</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="dote-child border-retention4"></div>
                    </div>
                    <div style="font-size:14px;">&nbsp;Retention Phase 4</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>107</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="border-retention4">
                        <i class="mdi mdi-close pending-icon"></i>
                      </div>
                    </div>
                    <div style="font-size:14px;">&nbsp;Pending Withdrawn</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>46</td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>

          <div>
            <table
              class="history-table"
              style="position:relative;font-size:smaller;color:#545454;width: 100%;"
            >
              <tbody>
                <tr>
                  <td class="cell_1">
                    <div style="line-height:1px;border:1px solid null;padding:1px">
                      <div
                        style="float:left;width:4px;height:0;border:5px solid #57607D;overflow:hidden"
                      ></div>&nbsp;
                    </div>
                  </td>
                  <td class="legendLabel">
                    <div style="font-size:14px;">
                      &nbsp;
                      <strong>Enrolled - Orientation</strong>
                    </div>
                  </td>
                  <td class="cell_3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td class="cell_4">
                    <b>140</b>
                  </td>
                </tr>

                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="dote-child border-active"></div>
                    </div>
                    <div style="font-size:14px;">&nbsp;Active</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>94</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="dote-child border-retention1"></div>
                    </div>
                    <div style="font-size:14px;">&nbsp;Retention Phase 1</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>19</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="dote-child border-retention2"></div>
                    </div>
                    <div style="font-size:14px;">&nbsp;Retention Phase 2</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="dote-child border-retention3"></div>
                    </div>
                    <div style="font-size:14px;">&nbsp;Retention Phase 3</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="dote-child border-retention4"></div>
                    </div>
                    <div style="font-size:14px;">&nbsp;Retention Phase 4</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="border-retention4">
                        <i class="mdi mdi-close pending-icon"></i>
                      </div>
                    </div>
                    <div style="font-size:14px;">&nbsp;Pending Withdrawn</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>
          <div
            class="status_box_footer"
          >Pending Withdrawal is not represented in the graph above as these GCs are no longer a part of Case Management.</div>
        </div>
      </div>
      <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="card-box height-900">
          <h4 class="text-center bolder">Attendance Week-to-Date</h4>
          <p class="text-muted mb-0 text-center">Sunday-Saturday</p>
          <div class="mt-4" style="padding-bottom: 17px;">
            <div
              id="chartContainer"
              style="height: 360px; width: 100%; position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
            >
              <svg
                height="360"
                version="1.1"
                width="376.55"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                style="overflow: hidden; position: relative; left: -0.3125px; top: -0.4px;"
              >
                <desc
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
                >Created with Raphaël 2.3.0</desc>
                <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);" />
                <text
                  x="328.225"
                  y="306.100820665125"
                  text-anchor="middle"
                  font-family="sans-serif"
                  font-size="12px"
                  stroke="none"
                  fill="#888888"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal"
                  transform="matrix(0.8192,-0.5736,0.5736,0.8192,-136.0171,263.1983)"
                >
                  <tspan
                    dy="4.397695665125013"
                    style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
                  >Saturday</tspan>
                </text>
                <text
                  x="281.575"
                  y="306.100820665125"
                  text-anchor="middle"
                  font-family="sans-serif"
                  font-size="12px"
                  stroke="none"
                  fill="#888888"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal"
                  transform="matrix(0.8192,-0.5736,0.5736,0.8192,-138.4441,232.2341)"
                >
                  <tspan
                    dy="4.397695665125013"
                    style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
                  >Friday</tspan>
                </text>
                <text
                  x="234.925"
                  y="306.100820665125"
                  text-anchor="middle"
                  font-family="sans-serif"
                  font-size="12px"
                  stroke="none"
                  fill="#888888"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal"
                  transform="matrix(0.8192,-0.5736,0.5736,0.8192,-153.7088,210.259)"
                >
                  <tspan
                    dy="4.397695665125013"
                    style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
                  >Thursday</tspan>
                </text>
                <text
                  x="188.275"
                  y="306.100820665125"
                  text-anchor="middle"
                  font-family="sans-serif"
                  font-size="12px"
                  stroke="none"
                  fill="#888888"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal"
                  transform="matrix(0.8192,-0.5736,0.5736,0.8192,-167.9256,187.2711)"
                >
                  <tspan
                    dy="4.397695665125013"
                    style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
                  >Wednesday</tspan>
                </text>
                <text
                  x="141.625"
                  y="306.100820665125"
                  text-anchor="middle"
                  font-family="sans-serif"
                  font-size="12px"
                  stroke="none"
                  fill="#888888"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal"
                  transform="matrix(0.8192,-0.5736,0.5736,0.8192,-168.7638,155.4734)"
                >
                  <tspan
                    dy="4.397695665125013"
                    style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
                  >Tuesday</tspan>
                </text>
                <text
                  x="94.97500000000001"
                  y="306.100820665125"
                  text-anchor="middle"
                  font-family="sans-serif"
                  font-size="12px"
                  stroke="none"
                  fill="#888888"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal"
                  transform="matrix(0.8192,-0.5736,0.5736,0.8192,-176.0162,127.888)"
                >
                  <tspan
                    dy="4.397695665125013"
                    style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
                  >Monday</tspan>
                </text>
                <text
                  x="48.325"
                  y="306.100820665125"
                  text-anchor="middle"
                  font-family="sans-serif"
                  font-size="12px"
                  stroke="none"
                  fill="#888888"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal"
                  transform="matrix(0.8192,-0.5736,0.5736,0.8192,-183.6347,100.5535)"
                >
                  <tspan
                    dy="4.397695665125013"
                    style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
                  >Sunday</tspan>
                </text>
                <rect
                  x="30.83125"
                  y="293.600820665125"
                  width="34.9875"
                  height="0"
                  rx="0"
                  ry="0"
                  fill="#4fc6e1"
                  stroke="none"
                  fill-opacity="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
                />
                <rect
                  x="30.83125"
                  y="293.600820665125"
                  width="34.9875"
                  height="0"
                  rx="0"
                  ry="0"
                  fill="#4a81d4"
                  stroke="none"
                  fill-opacity="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
                />
                <rect
                  x="77.48125"
                  y="25"
                  width="34.9875"
                  height="268.600820665125"
                  rx="0"
                  ry="0"
                  fill="#4fc6e1"
                  stroke="none"
                  fill-opacity="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
                />
                <rect
                  x="77.48125"
                  y="25"
                  width="34.9875"
                  height="0"
                  rx="0"
                  ry="0"
                  fill="#4a81d4"
                  stroke="none"
                  fill-opacity="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
                />
                <rect
                  x="124.13125"
                  y="204.06721377675"
                  width="34.9875"
                  height="89.533606888375"
                  rx="0"
                  ry="0"
                  fill="#4fc6e1"
                  stroke="none"
                  fill-opacity="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
                />
                <rect
                  x="124.13125"
                  y="204.06721377675"
                  width="34.9875"
                  height="0"
                  rx="0"
                  ry="0"
                  fill="#4a81d4"
                  stroke="none"
                  fill-opacity="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
                />
                <rect
                  x="170.78125"
                  y="25"
                  width="34.9875"
                  height="268.600820665125"
                  rx="0"
                  ry="0"
                  fill="#4fc6e1"
                  stroke="none"
                  fill-opacity="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
                />
                <rect
                  x="170.78125"
                  y="25"
                  width="34.9875"
                  height="0"
                  rx="0"
                  ry="0"
                  fill="#4a81d4"
                  stroke="none"
                  fill-opacity="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
                />
                <rect
                  x="217.43125"
                  y="25"
                  width="34.9875"
                  height="268.600820665125"
                  rx="0"
                  ry="0"
                  fill="#4fc6e1"
                  stroke="none"
                  fill-opacity="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
                />
                <rect
                  x="217.43125"
                  y="25"
                  width="34.9875"
                  height="0"
                  rx="0"
                  ry="0"
                  fill="#4a81d4"
                  stroke="none"
                  fill-opacity="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
                />
                <rect
                  x="264.08125"
                  y="293.600820665125"
                  width="34.9875"
                  height="0"
                  rx="0"
                  ry="0"
                  fill="#4fc6e1"
                  stroke="none"
                  fill-opacity="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
                />
                <rect
                  x="264.08125"
                  y="293.600820665125"
                  width="34.9875"
                  height="0"
                  rx="0"
                  ry="0"
                  fill="#4a81d4"
                  stroke="none"
                  fill-opacity="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
                />
                <rect
                  x="310.73125"
                  y="293.600820665125"
                  width="34.9875"
                  height="0"
                  rx="0"
                  ry="0"
                  fill="#4fc6e1"
                  stroke="none"
                  fill-opacity="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
                />
                <rect
                  x="310.73125"
                  y="293.600820665125"
                  width="34.9875"
                  height="0"
                  rx="0"
                  ry="0"
                  fill="#4a81d4"
                  stroke="none"
                  fill-opacity="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
                />
              </svg>
              <div
                class="morris-hover morris-default-style"
                style="left: 242.894px; top: 139px; display: none;"
              >
                <div class="morris-hover-row-label">Friday</div>
                <div class="morris-hover-point" style="color: #4fc6e1">
                  On Site:
                  0
                </div>
                <div class="morris-hover-point" style="color: #4a81d4">
                  Online:
                  0
                </div>
              </div>
            </div>
            <div class="text-center">
              <p class="text-muted font-15 font-family-secondary mb-0">
                <span class="mx-2">
                  <i class="mdi mdi-checkbox-blank-circle text-blue"></i>Online
                </span>
                <span class="mx-2">
                  <i class="mdi mdi-checkbox-blank-circle text-info"></i>On Site
                </span>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="card-box stats-box border-orange">
              <div class="display-bolder1">8</div>
              <strong># Unique GCS Attended</strong>
            </div>
            <div class="card-box stats-box border-cyan">
              <div class="display-bolder1">10</div>
              <strong>Total Attendance Swipes</strong>
            </div>
            <div class="card-box stats-box border-magenta">
              <div class="display-bolder1">0.6%</div>
              <strong># Unique Attended vs Enrolled</strong>
            </div>
          </div>
          <p>
            <em>* Displays week to date for the week beginning on Sunday.</em>
          </p>
          <div class="with-border"></div>
          <div class="row">
            <div class="col-md-6">
              <div class="text-center">
                <h3 class="header-title my-1">
                  <span data-plugin="counterup " class="display-bolder1">2.8%</span>
                  <br />
of your GCs are
                  expected to attend today.
                </h3>
              </div>
            </div>
            <div class="col-md-6">
              <div class="text-center">
                <h3 class="header-title my-1">
                  <span data-plugin="counterup " class="display-bolder1">97.1%</span>
                  <br />
of your committed GCs have not yet checked-in.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="card-box height-900">
          <h4 class="text-center bolder">
            Recruitment Totals
            <i
              class="mdi mdi-help-circle rounded-circle text-info custom-tooltip"
              data-toggle="tooltip"
              data-placement="bottom"
              title
              data-original-title="Represents the total of all GCs in a Recruitment + Registration  phase, inclusive of all statuses. "
            ></i>
          </h4>
          <div id="chart-container2">
            <span
              id="chartobject-1"
              class="fusioncharts-container"
              style="position: relative; text-align: left; line-height: normal; display: inline-block; zoom: 1; vertical-align: middle; font-weight: normal; font-variant: normal; font-style: normal; text-decoration: none; padding: 0px; margin: 0px; border: none; direction: ltr; transform: none; width: 100%; height: 500px;"
            >
              <svg
                height="500"
                version="1.1"
                width="377"
                xmlns="http://www.w3.org/2000/svg"
                id="raphael-paper-61"
                style="overflow: hidden; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none; cursor: default; vertical-align: middle; position: relative; left: -0.8625px; top: -0.6px; background-color: rgb(255, 255, 255);"
              >
                <desc />
                <defs>
                  <clipPath id="rr-72A7BD38-5A27-45EF-A1B3-9C21397B0AAA">
                    <rect x="15" y="15" width="347" height="470" transform="matrix(1,0,0,1,0,0)" />
                  </clipPath>
                  <clipPath id="rr-72F5B18C-A2F5-40AC-86EA-751CDC11148A">
                    <rect x="15" y="15" width="347" height="470" transform="matrix(1,0,0,1,0,0)" />
                  </clipPath>
                </defs>
                <g class="raphael-group-62-parentgroup">
                  <g class="raphael-group-63-background">
                    <rect
                      x="0"
                      y="0"
                      width="377"
                      height="500"
                      stroke="none"
                      fill-opacity="1"
                      fill="#ffffff"
                      ry="0"
                      rx="0"
                    />
                    <rect
                      x="0"
                      y="0"
                      width="377"
                      height="500"
                      stroke="#767575"
                      stroke-opacity="0.5"
                      stroke-width="0"
                      stroke-dasharray="none"
                      fill="none"
                      ry="0"
                      rx="0"
                    />
                  </g>
                  <g class="raphael-group-83-canvas" />
                  <g class="raphael-group-64-axisbottom" />
                  <g
                    class="raphael-group-85-axisReferenceVisualsFloor"
                    clip-path="url('#rr-72A7BD38-5A27-45EF-A1B3-9C21397B0AAA')"
                  />
                  <g class="raphael-group-84-axisReferenceVisualsBottom" />
                  <g class="raphael-group-65-belowplot" />
                  <g class="raphael-group-86-crossline" />
                  <g class="raphael-group-87-crosslineBottom" />
                  <g
                    class="raphael-group-90-axisReferenceVisualsMiddle"
                    clip-path="url('#rr-72F5B18C-A2F5-40AC-86EA-751CDC11148A')"
                  />
                  <g class="raphael-group-92-quadrant" />
                  <g class="raphael-group-66-plots">
                    <g class="raphael-group-94-column-shadow-group" />
                    <g class="raphael-group-95-column" />
                    <g class="raphael-group-96-area-shadow-group" />
                    <g class="raphael-group-97-area" />
                    <g class="raphael-group-98-line-shadow-group" />
                    <g class="raphael-group-99-line" />
                    <g class="raphael-group-100-default-shadow-group" />
                    <g class="raphael-group-101-default" />
                    <path
                      d="M158.57153603557862,79.10079858369633A173.5,173.5,0,0,1,362,249.99999999999997L304.1666666666667,249.99999999999997A115.66666666666667,115.66666666666667,0,0,0,168.54769069038576,136.06719905579754Z"
                      fill="#2059a0"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M168.54769069038576,136.06719905579754A115.66666666666667,115.66666666666667,0,0,1,304.1666666666667,249.99999999999997L246.33333333333334,250A57.833333333333336,57.833333333333336,0,0,0,178.52384534519288,193.0335995278988Z"
                      fill="#2bc5ca"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M15.876625942861779,232.58102387827168A173.5,173.5,0,0,1,158.57153603557862,79.10079858369633L168.54769069038576,136.06719905579754A115.66666666666667,115.66666666666667,0,0,0,73.41775062857452,238.3873492521811Z"
                      fill="#ad4489"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M362,250A173.5,173.5,0,1,1,15.876625942861779,232.58102387827168L73.41775062857452,238.3873492521811A115.66666666666667,115.66666666666667,0,1,0,304.1666666666667,250Z"
                      fill="#70b346"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M304.1666666666667,250A115.66666666666667,115.66666666666667,0,1,1,168.54769069038576,136.06719905579754L178.52384534519288,193.0335995278988A57.833333333333336,57.833333333333336,0,1,0,246.33333333333334,250Z"
                      fill="#ff9235"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                    <path
                      d="M130.66666666666666,250A57.833333333333336,57.833333333333336,0,0,0,246.33333333333334,250A57.833333333333336,57.833333333333336,0,0,0,130.66666666666666,250Z"
                      fill="#ffffff"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke-opacity="1"
                      fill-opacity="0.6"
                      stroke-dasharray="none"
                    />
                  </g>
                  <g class="raphael-group-67-axistop" />
                  <g class="raphael-group-68-sumlabels fusioncharts-datalabels" />
                  <g class="raphael-group-91-axisReferenceVisualsTop" />
                  <g class="raphael-group-93-axisReferenceVisualsCeil" />
                  <g
                    class="raphael-group-69-datalabel"
                    font-family="Source Sans Pro"
                    font-size="14px"
                    font-weight="normal"
                    font-style="normal"
                    style="font-family: &quot;Source Sans Pro&quot;; font-size: 14px; font-weight: normal; font-style: normal; border-radius: 0px;"
                  >
                    <g class="raphael-group-89-canvasdatalabel" />
                    <text
                      fill-opacity="1"
                      fill="#000000"
                      x="188.5"
                      stroke="none"
                      text-anchor="middle"
                      y="246"
                      style="text-anchor: middle;"
                      opacity
                    >
                      <tspan x="188.5">299</tspan>
                      <tspan dy="16.8" x="188.5">in Pipeline</tspan>
                    </text>
                  </g>
                  <g class="raphael-group-88-crosslineTop" />
                  <g class="raphael-group-70-aboveplot" />
                  <g class="raphael-group-71-caption" />
                  <g class="raphael-group-72-chartdefault" />
                  <g class="raphael-group-73-chartdefault-shadow" />
                  <g class="raphael-group-74-tracker" />
                  <g class="raphael-group-75-logo" />
                  <g class="raphael-group-76-toolbar-master">
                    <g class="raphael-group-81-toolbar">
                      <rect
                        fill-opacity="0"
                        fill="#eeeeee"
                        stroke="#eeeeee"
                        stroke-opacity="0"
                        stroke-width="1"
                        width="0"
                        height="0"
                        x="367"
                        y="6"
                        ry="0"
                        rx="0"
                      />
                    </g>
                  </g>
                </g>
                <g class="raphael-group-aJzHRjkG">
                  <text
                    font-size="0px"
                    font-family="Verdana,sans"
                    x="6"
                    text-anchor="start"
                    fill-opacity="0.5"
                    fill="#000000"
                    stroke="none"
                    y="493"
                    style="font-size: 0px; font-family: Verdana, sans; cursor: pointer; text-anchor: start;"
                  >FusionCharts Trial</text>
                </g>
                <rect
                  x="0"
                  y="0"
                  width="10"
                  height="30"
                  ry="0"
                  rx="0"
                  fill="none"
                  stroke="#000000"
                  style="display: none;"
                />
              </svg>
              <div
                type="div"
                style="left: auto; top: 0px; padding: 5px 3px; border: 1px solid rgb(100, 100, 100); margin: 0px; outline: none; position: absolute; z-index: 50; right: auto; overflow: hidden; background: rgb(255, 255, 255); box-shadow: rgb(153, 153, 153) 2px 2px 5px; display: none;"
              ></div>
              <div
                class="fc__tooltip fusioncharts-div"
                style="color: rgb(90, 90, 90); padding: 6px; font-size: 14px; overflow: hidden; border-width: 1px; border-color: rgb(225, 225, 225); white-space: nowrap; position: absolute; border-style: solid; background-color: rgb(255, 255, 255); user-select: none; top: 0px; left: 0px; visibility: hidden; pointer-events: none; box-shadow: none; border-radius: 2px; font-family: &quot;Source Sans Pro&quot;;"
              ></div>
            </span>
          </div>
          <div class="text-center with-border">
            <h3 class="header-title my-1">
              <span data-plugin="counterup " class="display-bolder1">1</span>
              <br />GCs scheduled to register this week!
              <i
                class="mdi mdi-help-circle rounded-circle text-info custom-tooltip"
                data-toggle="tooltip"
                data-placement="top"
                title
                data-original-title="Represents the number of GCs with a registration appointment this week, Sunday-Saturday "
              ></i>
            </h3>
          </div>
          <div>
            <table
              class="history-table"
              style="position:relative;font-size:smaller;color:#545454;width: 100%;"
            >
              <tbody>
                <tr>
                  <td>
                    <div style="line-height:1px;border:1px solid null;padding:1px">
                      <div
                        style="float:left;width:4px;height:0;border:5px solid #2BC5CA;overflow:hidden"
                      ></div>&nbsp;
                    </div>
                  </td>
                  <td class="legendLabel">
                    <div style="font-size:14px;">
                      &nbsp;
                      <strong>Recruitment</strong>
                    </div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td class="cell_4">
                    <strong>83</strong>
                  </td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="dote-child border-active"></div>
                    </div>

                    <div style="font-size:14px;">&nbsp;Scheduled</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>55</td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>
          <div>
            <table
              class="history-table"
              style="position:relative;font-size:smaller;color:#545454;width: 100%;"
            >
              <tbody>
                <tr>
                  <td>
                    <div style="line-height:0px;border:1px solid null;padding:1px;">
                      <div
                        style="float:left;width:4px;height:0;border:5px solid #FF9235;overflow:hidden"
                      ></div>&nbsp;
                    </div>
                  </td>
                  <td class="legendLabel">
                    <div style="font-size:14px;">
                      &nbsp;
                      <strong>Registration</strong>
                    </div>
                  </td>
                  <td></td>
                  <td class="cell_4">
                    <strong>216</strong>
                  </td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="dote-child border-retention3"></div>
                    </div>
                    <div style="font-size:14px;">
                      &nbsp;
                      <strong>Pending</strong>
                    </div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>34</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel2">
                    <div style="font-size:14px;line-height: 18px;">District Approval</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel2">
                    <div style="font-size:14px;line-height: 18px;">Local Review</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel">
                    <div class="dote-father">
                      <div class="dote-child border-retention2"></div>
                    </div>
                    <div style="font-size:14px;">
                      &nbsp;
                      <strong>Approved</strong>
                    </div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel2">
                    <div style="font-size:14px;line-height: 18px;">Missing Transcript</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td class="cell_1"></td>
                  <td class="legendLabel2">
                    <div style="font-size:14px;line-height: 18px;">Missing Immunizations</div>
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4>Today's To Dos</h4>
            <Table
              :items="[]"
              :fields="['GC Name', 'Note Category', 'Sub Category', 'Descriptor', 'Action', 'Created By', 'Assigned To', 'Date Due', 'Link']"
            />

            <br />
            <br />

            <h4>Overdue To Dos</h4>
            <Table
              :items="[]"
              :fields="['GC Name', 'Note Category', 'Sub Category', 'Descriptor', 'Action', 'Created By', 'Assigned To', 'Date Due', 'Link']"
            />

            <a
              class="btn btn-info waves-effect waves-light"
              href="https://dev.accelerationacademy.net/user/todos"
              target="_blank"
            >View All</a>
          </div>
        </div>
      </div>
    </div>
    <h2>Case Management Dashboard</h2>
    <form
      class="filters"
      id="report-case-management"
      method="post"
      action="?district=Array#results"
      autocomplete="off"
    >
      <fieldset>
        <legend>Filters</legend>

        <input type="hidden" value="Array" name="district" />
        <div class="form-group col-md-12 phase">
          <input
            type="submit"
            class="btn btn-secondary waves-effect waves-light right"
            name="submit"
            value="Apply Filter"
          />
        </div>
        <InputSelectGroup2
          label="Phase"
          :array="phases"
          width="6"
          :id="phase"
          name="phase"
          @phaseChanged="phase = $event"
        />

        <InputSelectGroup2
          label="Status"
          :array="statuses"
          width="6"
          :id="status"
          name="selectedStatus"
          @selectedStatusChanged="status = $event"
        />

        <div class="clear"></div>

        <DatePicker
          label="Date Start"
          name="dateStart"
          width="6"
          :id="dateStart"
          @birthdateChanged="dateStart = $event"
        />

        <DatePicker
          label="Date End"
          name="dateEnd"
          width="6"
          :id="dateEnd"
          @birthdateChanged="dateEnd = $event"
        />
      </fieldset>
    </form>
    <a
      class="btn btn-secondary btn-rounded waves-effect waves-light"
      href="_download-dashboard-report.php?phase=&amp;status=&amp;date_start=&amp;status=&amp;date_end="
    >
      <i class="fas fa-export" aria-hidden="true"></i>Download Report
    </a>
    <div class="card">
      <div class="card-body">
        <Table
          :items="[]"
          :fields="['First Name', 'Last Category', 'Phase', 'Status', 'Last Date of Attendance', 'Average Time on Site (week)', 'Last Login on Edmentum', 'Total Time Online (Week-to-Date)', 'Date of the last note', 'AA User']"
        />
      </div>
    </div>
    <p>
      <em>* Data reflects the last 90 calendar days.</em>
    </p>
  </div>
</template>

<style scoped>
.col-xl-2-5 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 16.66667%;
  flex: 0 0 19.96667%;
  max-width: 19.96667%;
}

.bg-hard-blue {
  background-color: #3f518b !important;
}

.bg-pink {
  background-color: #ca2bc5 !important;
}

.avatar-lg img {
  width: 100%;
}

.display-5 {
  font-size: 3rem;
  line-height: 1.1;
}

.bg-orange {
  background-color: #ed9451 !important;
}

.p-dashboard-intro {
  width: 125%;
  float: right;
}

.height-900 {
  min-height: 915px;
}

.bolder {
  font-weight: 600;
}

.custom-tooltip {
  font-size: 16px;
}

.with-border {
  border-bottom: 1px solid #dadada;
  margin-bottom: 19px;
  clear: both;
}

.display-bolder1 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.1;
}

.dote-father {
  border: 1px solid null;
  padding: 1px;
  float: left;
}

.border-active {
  border-color: #2059a0;
}

.dote-child {
  width: 4px;
  height: 0;
  border: 5px solid;
  overflow: hidden;
  border-radius: 50%;
}

.status_box_footer {
  font-style: italic;
  font-size: 10px;
  font-weight: 500;
  color: #9a9eab;
  text-transform: uppercase;
}

.stats-box {
  float: left;
  border-top: solid;
  width: 28.67%;
  padding-left: 2px;
  text-align: center;
  border-bottom: solid;
  border-radius: 1px;
  padding-right: 2px;
}

.border-orange {
  border-color: #ff9235 !important;
}

.border-cyan {
  border-color: #2bc5ca !important;
}

.stats-box:not(:first-child) {
  margin-left: 6.9%;
}

.todos-table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.todos-table td,
.todos-table th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>

<script>
import Api from "../../services/api/Api.js";
import Table from "../../components/shared/Table";

export default {
  components: {
    Table,
  },
  async asyncData(context) {
    const api = new Api(context);
    const districts = await api.getDistricts();
    const phases = await api.getPhases();
    const statuses = await api.getStatuses();

    return {
      districts,
      phases,
      statuses,
    };
  },
  mounted() {
    console.log(this.$store.state);
  },
};
</script>