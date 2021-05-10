import React from "react";
import { ButtonGroup, Button } from 'react-bootstrap'
import { Link, useRouteMatch, useLocation } from 'react-router-dom'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Movie() {

    let { url } = useRouteMatch()
    let query = useQuery()

    return (
        <>
            <h1>Movie Category</h1>
            <ButtonGroup aria-label="movie-category">
                <Button
                    as={Link}
                    to={url + "?type=Adventure"}
                    variant="secondary"
                >
                    Adventure
        </Button>
                <Button as={Link} to={url + "?type=Crime"} variant="secondary">
                    Crime
        </Button>
                <Button as={Link} to={url + "?type=Action"} variant="secondary">
                    Action
        </Button>
                <Button as={Link} to={url + "?type=Romance"} variant="secondary">
                    Romance
        </Button>
                <Button as={Link} to={url + "?type=Comedy"} variant="secondary">
                    Comedy
        </Button>
            </ButtonGroup>
            <h3 className="my-2">Please Choose Category: <span className="text-danger"> {query.get("type")}</span> </h3>
        </>
    );
}

export default Movie;
