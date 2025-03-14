import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
const styles = {
    wrapper: {
        borderRadius: "1rem",
        border: "solid 1px lightgray",
        paddingRight: "0.5em",
        paddingLeft: "0.5em",
        paddingTop: "0.25em",
        paddingBottom: "0.25em",
        marginLeft: "0.2em",
        marginRight: "0.2em",
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
    },
    text: {
        whiteSpace: "nowrap",
        userSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none"
    },
    icon: {
        color: "red",
        marginLeft: "0.5em",
        cursor: "pointer",
    }
};
const SelectChip = ({ pattern, data, onRemove, icon, style }) => {
    //it simplifies the joining of the styles
    const getStyle = (key, localStyleKey) => {
        var _a;
        return Object.assign(Object.assign({}, styles[localStyleKey !== null && localStyleKey !== void 0 ? localStyleKey : key]), ((_a = style === null || style === void 0 ? void 0 : style[key]) !== null && _a !== void 0 ? _a : null));
    };
    const OnKeyDown = (event) => {
        if (event.key === "Enter") {
            onRemove();
        }
    };
    //this will handle the replacing 
    const replaceFields = (pattern) => {
        const regex = /<field:([\w]+)>/g;
        return pattern.replace(regex, (_, fieldName) => {
            if (data != undefined && data != null) {
                return data[fieldName] || '';
            }
            else {
                return '';
            }
        });
    };
    return _jsxs("div", { style: getStyle("wrapper"), children: [_jsx("span", { style: getStyle("text"), children: replaceFields(pattern) }), _jsx(FontAwesomeIcon, { tabIndex: 0, onKeyDown: OnKeyDown, icon: icon != null ? icon : faClose, "data-chip-icon": true, style: getStyle("icon"), onClick: (e) => onRemove() })] });
};
export default SelectChip;
