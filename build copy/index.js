var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from "react";
import moment from "moment";
// components
import CalendarList from "./CalendarList";
// config
import { LOCALE } from "./utils/locale";
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            startDate: _this.props.startDate ? _this.props.startDate : null,
            endDate: _this.props.endDate ? _this.props.endDate : null
        };
        _this.setStartDate = _this.setStartDate.bind(_this);
        _this.setEndDate = _this.setEndDate.bind(_this);
        _this.onPress = _this.onPress.bind(_this);
        return _this;
    }
    Index.prototype.setStartDate = function (startDate) {
        var _a = this.props, onChange = _a.onChange, singleSelectMode = _a.singleSelectMode;
        this.setState({ startDate: startDate, endDate: null });
        if (singleSelectMode) {
            onChange(startDate);
        }
        else {
            onChange({ startDate: startDate, endDate: null });
        }
    };
    Index.prototype.setEndDate = function (startDate, endDate) {
        var onChange = this.props.onChange;
        this.setState({ endDate: endDate });
        onChange({ startDate: startDate, endDate: endDate });
    };
    Index.prototype.onPress = function (date) {
        var _a = this.state, startDate = _a.startDate, endDate = _a.endDate;
        var singleSelectMode = this.props.singleSelectMode;
        if (singleSelectMode) {
            this.setState({ startDate: date });
            return;
        }
        if (!startDate && !endDate) {
            this.setStartDate(date);
            return;
        }
        if (startDate && endDate) {
            this.setStartDate(date);
            return;
        }
        if (startDate) {
            if (moment(date).isBefore(startDate)) {
                this.setStartDate(date);
            }
            else {
                this.setEndDate(startDate, date);
            }
        }
    };
    Index.prototype.render = function () {
        var _a = this.props, style = _a.style, _b = _a.pastYearRange, pastYearRange = _b === void 0 ? 1 : _b, _c = _a.futureYearRange, futureYearRange = _c === void 0 ? 2 : _c, _d = _a.locale, locale = _d === void 0 ? LOCALE : _d;
        var _e = this.state, startDate = _e.startDate, endDate = _e.endDate;
        return (<CalendarList pastYearRange={pastYearRange} futureYearRange={futureYearRange} locale={locale} onPress={this.onPress} startDate={startDate} endDate={endDate} style={style}/>);
    };
    return Index;
}(Component));
export default Index;
//# sourceMappingURL=index.js.map