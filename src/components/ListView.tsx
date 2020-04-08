import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import GladiDataType from "../models/GladiDataType";
import { Link } from "react-router-dom";
import "../style/listView.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    backgroundColor: theme.palette.background.paper,
    width: "80%",
    height: "45%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const ListView: React.FC<Props> = () => {
  const [gladiData, setGladiData] = useState<GladiDataType[]>();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/all_gladiolus`)
      .then((res) => {
        setGladiData(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const classes = useStyles();
  return (
    // <div className="list">
    //   {gladiData?.map((gladi: GladiDataType) => (
    //     <div className="card">
    //       <img src={gladi.pictures[0]} alt="pic" height="300" width="250" />
    //       <Link
    //         className="name"
    //         key={gladi.name}
    //         to={{
    //           pathname: `/detailed_view/${gladi.name}`,
    //           state: gladi,
    //         }}
    //       >
    //         {gladi.name}
    //       </Link>
    //     </div>
    //   ))}
    // </div>

    <div className={classes.root}>
      <GridList cellHeight={350} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">Varieties</ListSubheader>
        </GridListTile>
        {gladiData?.map((gladi: GladiDataType) => (
          <GridListTile key={gladi.name}>
            <img src={gladi.pictures[0]} alt={gladi.name} />
            <GridListTileBar
              title={gladi.name}
              // subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${gladi.name}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ListView;
