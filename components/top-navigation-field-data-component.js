import React from "react";
import {
  Icon,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
  Modal,
  Card,
  Text,
  Button,
  Input,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

export const TopNavigationFieldData = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  //Researchers
  const [researchers, setResearchers] = React.useState("");

  //Fisherman
  const [fishermanAngler, setFishermanAngler] = React.useState(0);
  const [fishermanOctupus, setFishermanOctupus] = React.useState(0);
  const [fishermanOther, setFishermanOther] = React.useState(0);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const openOtherInfo = () => {
    setVisible(true);
    toggleMenu();
  };

  const openLitterModal = () => {
    alert("not implemented yet");
  };

  const [visible, setVisible] = React.useState(false);

  const renderRightActions = () => (
    <React.Fragment>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem
          accessoryLeft={InfoIcon}
          title="Other Info"
          onPress={openOtherInfo}
        />
        <MenuItem
          accessoryLeft={InfoIcon}
          title="Litter"
          onPress={openLitterModal}
        />
      </OverflowMenu>
    </React.Fragment>
  );

  return (
    <Layout style={styles.container} level="1">
      <TopNavigation
        alignment="center"
        title="Eva Application"
        subtitle="Subtitle"
        accessoryRight={renderRightActions}
      />
      <Modal
        style={styles.modal}
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>
          <Text>Other Info</Text>
          <Input
            label="Researchers"
            style={styles}
            value={researchers}
            multiline={true}
            placeholder="One per line"
            onChangeText={(researchers) => setResearchers(researchers)}
          />
          <Input
            label="Fisherman Angler"
            style={styles}
            value={fishermanAngler}
            onChangeText={(fishermanAngler) =>
              setFishermanAngler(fishermanAngler)
            }
            keyboardType="numeric"
          />
          <Input
            label="Fisherman Octupus"
            style={styles}
            value={fishermanOctupus}
            onChangeText={(fishermanOctupus) =>
              setFishermanOctupus(fishermanOctupus)
            }
            keyboardType="numeric"
          />
          <Input
            label="Fisherman Other"
            style={styles}
            value={fishermanOther}
            onChangeText={(fishermanOther) => setFishermanOther(fishermanOther)}
            keyboardType="numeric"
          />
          <Button onPress={() => setVisible(false)}>Close</Button>
        </Card>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: "80%",
    height: "20%",
  },
});
