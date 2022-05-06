import RangeSlider from "rn-range-slider";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useCallback } from "react";
import { SliderPicker } from "react-native-slider-picker/src/components/SliderPicker";

export default function Filter() {
  const [open, setOpen] = useState(false);
  const [min, setMin] = useState(0);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity>
          {!open ? (
            <MaterialCommunityIcons
              onPress={() => setOpen(true)}
              name="menu"
              size={32}
              color="black"
            />
          ) : (
            <>
              <MaterialCommunityIcons
                onPress={() => setOpen(false)}
                name="menu-down"
                size={40}
                color="black"
              />
              <Text>Filtros</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      {open && (
        <View>
          <View style={styles.container}>
            <View style={styles.box}>
              <Text>Valor Mínimo:</Text>
              {/* <Text>{min}</Text> */}
              {/* <SliderPicker
                minLabel={"0"}
                maxLabel={"100"}
                maxValue={100}
                callback={(position) => {
                  setMin(position);
                }}
                defaultValue={min}
                labelFontColor={"#6c7682"}
                labelFontWeight={"600"}
                showFill={true}
                fillColor={"green"}
                // labelFontWeight={'bold'}
                showNumberScale={true}
                showSeparatorScale={true}
                buttonBackgroundColor={"#fff"}
                buttonBorderColor={"#6c7682"}
                buttonBorderWidth={1}
                scaleNumberFontWeight={"200"}
                buttonDimensionsPercentage={6}
                heightPercentage={1}
                widthPercentage={80}
              /> */}

              <Slider
                style={styles.slider}
                min={0}
                max={100}
                step={1}
                floatingLabel
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                renderLabel={renderLabel}
                renderNotch={renderNotch}
                onValueChanged={handleValueChange}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#b89128",
  },

  box: {
    display: "flex",
    alignItems: "center",
  },

  menu: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 10,
  },
});
