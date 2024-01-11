import styles from './TruncatedText.module.scss';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Typography from "@mui/material/Typography";
import { IconButton} from '@mui/material'
import { Box} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const TruncatedText = (props: any) => {
    const [isUnfolded, setIsUnfolded] = useState(false)
    const [hasPoints, setHasPoints] = useState(true)
    const [displayedText, setDisplayedText] = useState('')

    const truncatedText = props.text.slice(0, props.numCharacters);

    const onClick = (e) => {
        setIsUnfolded(!isUnfolded)
        e.stopPropagation();
    }

    useEffect(() => {
        props.onClick(isUnfolded)
        setupDisplayedText()
    }, [isUnfolded])

    useEffect(() => {
        setupDisplayedText()
    }, [hasPoints])

    useEffect(() => {
        setupPoints()
    }, [])

    const setupPoints = () => {
        if(props.text.length >= props.numCharacters){
            setHasPoints(true)
        } else {
            setHasPoints(false)
        }
    }

    const setupDisplayedText = () => {
        if(isUnfolded){
            setDisplayedText(props.text)
        } else {
            let text = truncatedText
            if(hasPoints){
                text += '...'
            }
            setDisplayedText(text)
        }
    }

    return (<>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
            <Typography
                sx={{
                    color: props.color.main,
                    typography: props.typography,
                    textAlign: 'left',
                    textOverflow: 'ellipsis',
                    width: "100%",
                }}>
                {displayedText}
            </Typography>
            {
                hasPoints?
                    <IconButton
                        id='truncated'
                        size={'small'}
                        onClick={onClick}>
                        {
                            isUnfolded?
                                <KeyboardArrowUpIcon 
                                    fontSize='small'
                                    sx={{
                                        color: props.color.main,
                                    }}/>
                            :
                                <KeyboardArrowDownIcon 
                                    fontSize='small'
                                    sx={{
                                        color: props.color.main,
                                    }}/>
                        }
                    </IconButton>
                :
                    null
            }

        </Box>
    </>);
}

TruncatedText.defaultProps =
{
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
    'Deserunt debitis tempora eveniet dignissimos voluptates ' +
    'dicta maxime! Natus, a est. Iure perferendis nobis error ' +
    'ad? Dignissimos qui ut velit est aut.' + 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' + 
    'Facilis corporis velit laborum iusto aperiam deleniti ' +
    'inventore nemo, maiores quos iure. Dolor vitae voluptas ' +
    'quod repellendus rerum animi reiciendis veritatis cum.',
    typography: {lg: 'h5'},
    color: {main: 'green'},
    numCharacters: 10,
    onClick: function(){}
}

TruncatedText.propTypes = 
{
    text: PropTypes.string,
    typography: PropTypes.object,
    color: PropTypes.object,
    numCharacters: PropTypes.number,
    onClick: PropTypes.func
}

