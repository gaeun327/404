import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* 상단 헤더 - 404 Found 감성 */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          404 <Text style={{ color: "#FF3B30" }}>Found</Text>
        </Text>
        <Text style={styles.welcome}>가은님, 오늘 지뢰는 피하셨나요? 🚩</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* 핵심 액션 버튼 - 핀 꽂기 */}
        <View style={styles.actionSection}>
          <TouchableOpacity style={styles.blueBtn}>
            <Text style={styles.btnText}>📍 맛집 추천 (Blue Pin)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.redBtn}>
            <Text style={styles.btnText}>🚩 지뢰 주의 (Red Pin)</Text>
          </TouchableOpacity>
        </View>

        {/* 간단 피드 미리보기 (나중에 데이터 연결) */}
        <View style={styles.feedPreview}>
          <Text style={styles.sectionTitle}>친구들의 최근 핀</Text>
          <View style={styles.dummyCard}>
            <Text style={styles.cardText}>
              내 친구 '철수'가 성수동에 빨간 핀을 꽂았습니다!
            </Text>
            <Text style={styles.cardSubText}>"여기 너무 불친절해요..."</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // 힙한 다크모드 배경
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 70,
    marginBottom: 30,
  },
  logo: {
    fontSize: 36,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: -1,
  },
  welcome: {
    fontSize: 14,
    color: "#AAAAAA",
    marginTop: 5,
  },
  content: {
    paddingBottom: 40,
  },
  actionSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  blueBtn: {
    backgroundColor: "#007AFF",
    width: "48%",
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  redBtn: {
    backgroundColor: "#FF3B30",
    width: "48%",
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  btnText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 13,
  },
  feedPreview: {
    marginTop: 10,
  },
  sectionTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  dummyCard: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 5,
    borderLeftColor: "#FF3B30",
  },
  cardText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },
  cardSubText: {
    color: "#888",
    fontSize: 12,
    marginTop: 5,
  },
});
