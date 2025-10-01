import React, { useMemo, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ListRenderItemInfo,
  Modal,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation, useRoute, NavigatorScreenParams } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles, IMAGE_W } from "./styles";

export type CarFeature =
  | "Seats"
  | "Hybrid"
  | "AirCondition"
  | "CarPlay"
  | "Bluetooth"
  | "Radio";

export type CarDetails = {
  id: string;
  name: string;
  pricePerDay: number;
  images: string[];
  features: CarFeature[];
  specs: {
    transmission: "Automatic" | "Manual";
    fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
    doors: number;
    luggage: number;
    mpg?: number;
    horsepower?: number;
  };
};

export type BookingStackParamList = {
  BookingFlow: { car: CarDetails };
  Shipping: {
    car: CarDetails;
    booking: {
      pickupLocation: string;
      dropoffLocation: string;
      pickupDate: string;  
      dropoffDate: string; 
    };
  };
};
type RootStackParamList = {
  BookingStack: NavigatorScreenParams<BookingStackParamList>;
};
type RootNav = NativeStackNavigationProp<RootStackParamList>;

const formatDate = (d: Date | null) =>
  d ? d.toISOString().slice(0, 10) : ""; 

const prettyDate = (d: Date | null) => {
  if (!d) return "DD.MM.YYYY";
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
};

type RouteParams = { car: CarDetails };

type ActivePicker = "pickup" | "dropoff" | null;

export default function BookingFlowScreen() {
  const { params } = useRoute() as { params: RouteParams };
  const navigation = useNavigation<RootNav>();

  const car = params.car;

  const [index, setIndex] = useState(0);
  const listRef = useRef<FlatList<string>>(null);

  const [pickupLocation, setPickupLocation] = useState<string>("");
  const [dropoffLocation, setDropoffLocation] = useState<string>("");

  const [showPickupModal, setShowPickupModal] = useState(false);
  const [showDropoffModal, setShowDropoffModal] = useState(false);

  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [dropoffDate, setDropoffDate] = useState<Date | null>(null);
  const [activePicker, setActivePicker] = useState<ActivePicker>(null);
  const [tempDate, setTempDate] = useState<Date>(new Date());

  const openPicker = (which: ActivePicker) => {
    const seed =
      which === "pickup"
        ? pickupDate ?? new Date()
        : dropoffDate ?? (pickupDate ? pickupDate : new Date());
    setTempDate(seed);
    setActivePicker(which);
  };
  const closePicker = () => setActivePicker(null);
  const confirmPicker = () => {
    if (activePicker === "pickup") {
      setPickupDate(tempDate);
      if (dropoffDate && dropoffDate < tempDate) setDropoffDate(null);
    } else if (activePicker === "dropoff") {
      setDropoffDate(tempDate);
    }
    closePicker();
  };

  const canGoLeft = index > 0;
  const canGoRight = (car?.images.length ?? 0) - 1 > index;

  const goLeft = () => {
    if (!canGoLeft) return;
    const next = index - 1;
    setIndex(next);
    listRef.current?.scrollToIndex({ index: next, animated: true });
  };
  const goRight = () => {
    if (!canGoRight) return;
    const next = index + 1;
    setIndex(next);
    listRef.current?.scrollToIndex({ index: next, animated: true });
  };
  const onScrollToIndexFailed = () => {
    listRef.current?.scrollToOffset({ offset: index * IMAGE_W, animated: true });
  };
  const renderImage = ({ item }: ListRenderItemInfo<string>) => (
    <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
  );

  const dots = useMemo(
    () => (car?.images ?? []).map((_, i) => (
      <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
    )),
    [car?.images, index]
  );

  const locations = useMemo(
    () => ["Airport", "Downtown", "Midtown", "Uptown"],
    []
  );

  const canBook =
    !!pickupLocation &&
    !!dropoffLocation &&
    !!pickupDate &&
    !!dropoffDate &&
    (pickupDate as Date) <= (dropoffDate as Date);

  const handleBook = () => {
    if (!canBook) return;
    navigation.navigate("BookingStack", {
      screen: "Shipping",
      params: {
        car,
        booking: {
          pickupLocation,
          dropoffLocation,
          pickupDate: formatDate(pickupDate),
          dropoffDate: formatDate(dropoffDate),
        },
      },
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Pressable onPress={() => navigation.goBack()} hitSlop={10}>
            <Ionicons name="chevron-back" size={22} />
          </Pressable>
          <Text style={styles.brand}>Car Rental</Text>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <Ionicons name="home-outline" size={18} />
            <Ionicons name="car-outline" size={18} />
            <Ionicons name="menu-outline" size={22} />
          </View>
        </View>

        <View style={styles.carouselWrapper}>
          <Pressable
            onPress={goLeft}
            disabled={!canGoLeft}
            style={[styles.arrow, !canGoLeft && styles.arrowDisabled, { left: -6 }]}
          >
            <Ionicons name="chevron-back" size={22} />
          </Pressable>

          <FlatList
            ref={listRef}
            data={car.images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(u, i) => `${i}-${u}`}
            renderItem={renderImage}
            getItemLayout={(_, i) => ({ index: i, length: IMAGE_W, offset: i * IMAGE_W })}
            onScrollToIndexFailed={onScrollToIndexFailed}
            onMomentumScrollEnd={(e) =>
              setIndex(Math.round(e.nativeEvent.contentOffset.x / IMAGE_W))
            }
            snapToInterval={IMAGE_W}
            decelerationRate="fast"
          />

          <Pressable
            onPress={goRight}
            disabled={!canGoRight}
            style={[styles.arrow, !canGoRight && styles.arrowDisabled, { right: -6 }]}
          >
            <Ionicons name="chevron-forward" size={22} />
          </Pressable>
        </View>
        <View style={styles.dotsRow}>{dots}</View>

        <View style={styles.form}>

          <Pressable style={styles.select} onPress={() => setShowPickupModal(true)}>
            <Text style={[styles.selectText, !pickupLocation && styles.placeholder]}>
              {pickupLocation || "Pick up location"}
            </Text>
            <Ionicons name="chevron-down" size={18} />
          </Pressable>

          <Pressable style={styles.select} onPress={() => setShowDropoffModal(true)}>
            <Text style={[styles.selectText, !dropoffLocation && styles.placeholder]}>
              {dropoffLocation || "Drop off location"}
            </Text>
            <Ionicons name="chevron-down" size={18} />
          </Pressable>

          <View style={styles.dateRow}>
            <Pressable style={[styles.dateInput]} onPress={() => openPicker("pickup")}>
              <Text style={[styles.selectText, !pickupDate && styles.placeholder]}>
                {prettyDate(pickupDate)}
              </Text>
            </Pressable>
            <Pressable
              style={[styles.dateInput, !pickupDate && { opacity: 0.5 }]}
              onPress={() => pickupDate && openPicker("dropoff")}
              disabled={!pickupDate}
            >
              <Text style={[styles.selectText, !dropoffDate && styles.placeholder]}>
                {prettyDate(dropoffDate)}
              </Text>
            </Pressable>
          </View>
          <View style={styles.dateLabelsRow}>
            <Text style={styles.labelSmall}>Pick Up date</Text>
            <Text style={styles.labelSmall}>Drop off date</Text>
          </View>

          <Pressable
            disabled={!canBook}
            onPress={handleBook}
            style={[styles.bookBtn, !canBook && { opacity: 0.6 }]}
          >
            <Text style={styles.bookText}>Book</Text>
          </Pressable>
        </View>
      </View>

      <Modal transparent visible={showPickupModal} animationType="fade">
        <Pressable style={styles.modalBackdrop} onPress={() => setShowPickupModal(false)}>
          <View />
        </Pressable>
        <View style={styles.modalSheet}>
          <Text style={styles.modalTitle}>Pick up location</Text>
          {locations.map((loc) => (
            <TouchableOpacity
              key={loc}
              style={styles.modalItem}
              onPress={() => {
                setPickupLocation(loc);
                setShowPickupModal(false);
              }}
            >
              <Text style={styles.modalItemText}>{loc}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

      <Modal transparent visible={showDropoffModal} animationType="fade">
        <Pressable style={styles.modalBackdrop} onPress={() => setShowDropoffModal(false)}>
          <View />
        </Pressable>
        <View style={styles.modalSheet}>
          <Text style={styles.modalTitle}>Drop off location</Text>
          {locations.map((loc) => (
            <TouchableOpacity
              key={loc}
              style={styles.modalItem}
              onPress={() => {
                setDropoffLocation(loc);
                setShowDropoffModal(false);
              }}
            >
              <Text style={styles.modalItemText}>{loc}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

      <Modal visible={!!activePicker} transparent animationType="fade">
        <Pressable style={styles.modalBackdrop} onPress={closePicker} />
        <View style={[styles.modalSheet, { paddingBottom: 24 }]}>
          <Text style={styles.modalTitle}>
            {activePicker === "pickup" ? "Pick Up date" : "Drop off date"}
          </Text>

          <DateTimePicker
            value={tempDate}
            mode="date"
            display={Platform.OS === "ios" ? "inline" : "calendar"}
            onChange={(_, d) => d && setTempDate(d)}
            minimumDate={activePicker === "dropoff" ? (pickupDate ?? undefined) : undefined}
          />

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 12, marginTop: 12 }}>
            <Pressable onPress={closePicker} style={[styles.bookBtn, { backgroundColor: "#e5e7eb" }]}>
              <Text style={[styles.bookText, { color: "#111827" }]}>Cancel</Text>
            </Pressable>
            <Pressable onPress={confirmPicker} style={styles.bookBtn}>
              <Text style={styles.bookText}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
