import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../style/listView.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { GladiContext } from "../contexts/GladiContext";
import SearchBar from "./SearchBar";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "15px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "auto",
  },
  gridList: {
    backgroundColor: theme.palette.background.paper,
    width: "80%",
    height: "75%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const ListView: React.FC<Props> = () => {
  const context = useContext(GladiContext);

  const classes = useStyles();
  return (
    <div>
      <SearchBar />

      <div className={classes.root}>
        <GridList
          cellHeight={350}
          cols={3}
          spacing={8}
          className={classes.gridList}
        >
          <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
            <ListSubheader component="div" style={{ zIndex: 0 }}>
              Varieties
            </ListSubheader>
            <ListSubheader component="div" style={{ zIndex: 0 }}>
              <SearchBar />
            </ListSubheader>
          </GridListTile>
          {context.filteredGladiData?.map((gladi) => (
            <GridListTile key={gladi.name}>
              <img src={gladi.pictures[0]} alt={gladi.name} />
              <GridListTileBar
                title={gladi.name}
                // subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <Link
                    key={gladi.name}
                    to={{
                      pathname: `/detailed_view/${gladi.name}`,
                      state: gladi,
                    }}
                  >
                    <IconButton
                      aria-label={`info about ${gladi.name}`}
                      className={classes.icon}
                    >
                      <InfoIcon />
                    </IconButton>
                  </Link>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

export default ListView;
